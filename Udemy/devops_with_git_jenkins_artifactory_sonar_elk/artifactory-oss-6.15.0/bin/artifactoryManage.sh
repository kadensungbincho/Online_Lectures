#!/bin/bash
#
# Init script for Artifactory service (currently systemd)
#
# chkconfig: 345 86 14
# description: Artifactory Tomcat Servlet Engine
# processname: artifactory
# pidfile: /var/run/artifactory.pid
#
### BEGIN INIT INFO
# Provides:          artifactory
# Required-Start:    $remote_fs $syslog $network
# Required-Stop:     $remote_fs $syslog $network
# Default-Start:     3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start Artifactory on Tomcat
# Description:       Manages the services needed to run Artifactory on a dedicated Tomcat
### END INIT INFO
#

errorArtHome() {
    echo
    echo -e "\033[31m** ERROR: $1\033[0m"
    echo
    exit 1
}

checkArtHome() {
    if [ -z "$ARTIFACTORY_HOME" ] || [ ! -d "$ARTIFACTORY_HOME" ]; then
        errorArtHome "Artifactory home folder not defined or does not exists at $ARTIFACTORY_HOME"
    fi
}

checkArtPid() {
    if [ -z "$ARTIFACTORY_PID" ]; then
        errorArtHome "Artifactory pid destination ARTIFACTORY_PID was not set in $artDefaultFile ! Please add it!"
    fi
}

checkTomcatHome() {
    if [ -z "$TOMCAT_HOME" ] || [ ! -d "$TOMCAT_HOME" ]; then
        errorArtHome "Tomcat Artifactory folder not defined or does not exists at $TOMCAT_HOME"
    fi
}

checkArtUser() {
    # User under which tomcat will run
    if [ -z "$ARTIFACTORY_USER" ]; then
        # Will run as current user (may be root!!!)
        ARTIFACTORY_USER=${USER}
    fi
}

findShutdownPort() {
    SHUTDOWN_PORT=$(netstat -vatn | grep LISTEN | grep -w $CATALINA_MGNT_PORT | wc -l)
}

isAlive() {
    pidValue=""
    javaPs=""
    if [[ -e "$ARTIFACTORY_PID" ]]; then
        pidValue=$(cat ${ARTIFACTORY_PID})
        if [ -n "$pidValue" ]; then
            javaPs="$(ps -p ${pidValue} | grep java)"
        fi
    fi
}

# Check if conditions to run local METADATA are met
runMetadata() {
    if [[ "${START_LOCAL_MDS}" == true ]] && [[ -f ${metadataScript} ]]; then
        return 0
    else
        return 1
    fi
}

startMetadata() {
    if runMetadata; then
        chmod +x ${metadataScript}
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "${metadataScript} start"
    fi
}

stopMetadata() {
    if runMetadata; then
        chmod +x ${metadataScript}
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "${metadataScript} stop"
    fi
}


# TODO: omerk - temp opt-out instead of opt-in
START_LOCAL_ROUTER=${START_LOCAL_ROUTER:-true}
# Check if conditions to run local router are met
runRouter() {
    if [[ -f ${routerScript} ]]; then
        return 0
    else
        return 1
    fi
}

startRouter() {
    if runRouter; then
        chmod +x ${routerScript} && chown -R ${ARTIFACTORY_USER}:${ARTIFACTORY_USER} ${artBinDir}/../router
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "${routerScript} start"
    fi
}

stopRouter() {
    if runRouter; then
        chmod +x ${routerScript}
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "${routerScript} stop"
    fi
}

# Check if conditions to run local replicator are met
runReplicator() {
    if [ "${START_LOCAL_REPLICATOR}" == true ] && [ -f ${replicatorScript} ]; then
        return 0
    else
        return 1
    fi
}

startReplicator() {
    if runReplicator; then
        chmod +x ${replicatorScript}
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "${replicatorScript} start"
    fi
}

stopReplicator() {
    if runReplicator; then
        chmod +x ${replicatorScript}
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "${replicatorScript} stop"
    fi
}

start() {
    # Add additional catalina options for MDS support
    JOIN_PATHS=$ARTIFACTORY_HOME
    if runMetadata; then
       export METADATA_HOME="$ARTIFACTORY_HOME/metadata"
       export JOIN_PATHS=$JOIN_PATHS:$METADATA_HOME
    fi

    JAVA_OPTIONS="$JAVA_OPTIONS -Djfrog.join.key.paths=$JOIN_PATHS"
    export CATALINA_OPTS=$JAVA_OPTIONS

    # Start Tomcat in normal mode
    isAlive
    findShutdownPort
    if [ ${SHUTDOWN_PORT} -ne 0 ] || [ -n "$javaPs" ]; then
        echo "Artifactory Tomcat already started"
    else
        echo "Starting Artifactory tomcat as user $ARTIFACTORY_USER..."

        # Remove old tomcat.pid in case exists
        rm -f ${CATALINA_PID}

        noFileVal=$(ulimit -n)
        minNoFileMax=32000
        if [ "$noFileVal" != "unlimited" ] && [ ${noFileVal} -lt ${minNoFileMax} ]; then
            ulimit -n ${minNoFileMax} || echo "WARNING: Max number of open files $noFileVal is too small!
You should add:
artifactory soft nofile $minNoFileMax
artifactory hard nofile $minNoFileMax
to your /etc/security/limits.conf file."
        fi

        #
        minNbProcess=1024
        nbProcess=$(ulimit -u)
        if [ "$nbProcess" != "unlimited" ] && [ ${nbProcess} -lt ${minNbProcess} ]; then
            ulimit -u ${minNbProcess} || echo "WARNING: Number of processes $nbProcess is too small!
You should add:
artifactory soft nproc $minNbProcess
artifactory hard nproc $minNbProcess
to your /etc/security/limits.conf file."
        fi
        su -s "/bin/sh" ${ARTIFACTORY_USER} -c "export JAVA_HOME='$JAVA_HOME'; $TOMCAT_HOME/bin/startup.sh"
        RETVAL=$?
        if [ ${RETVAL} -ne 0 ]; then
            errorArtHome "Artifactory Tomcat server did not start. Please check the logs"
        fi
        findShutdownPort
        nbSeconds=1
        START_TMO=${START_TMO:-60}
        while [ ${SHUTDOWN_PORT} -eq 0 ] && [ ${nbSeconds} -lt ${START_TMO} ]; do
            sleep 1
            let "nbSeconds = $nbSeconds + 1"
            findShutdownPort
        done
        if [ ${SHUTDOWN_PORT} -eq 0 ]; then
            errorArtHome "Artifactory Tomcat server did not start in 60 seconds. Please check the logs"
        fi
        echo "Artifactory Tomcat started in normal mode"

        # Get the PID from the CATALINA_PID generated by Tomcat and copy it to ARTIFACTORY_PID
        if [ ! -f "${CATALINA_PID}" ]; then
            errorArtHome "Tomcat PID file (${CATALINA_PID}) not found. Unable to determine Artifactory java PID"
        fi
        cp -f ${CATALINA_PID} ${ARTIFACTORY_PID}
        echo "Artifactory running with PID $(cat ${ARTIFACTORY_PID})"

        startRouter
        startReplicator
        startMetadata
    fi
}

stop() {
    isAlive
    findShutdownPort
    if [ ${SHUTDOWN_PORT} -eq 0 ] && [ -z "$javaPs" ]; then
        echo "Artifactory Tomcat already stopped"
        RETVAL=0
    else
        echo "Stopping Artifactory Tomcat..."
        if [ ${SHUTDOWN_PORT} -ne 0 ]; then
            su -s "/bin/sh" ${ARTIFACTORY_USER} -c "export JAVA_HOME='$JAVA_HOME'; $TOMCAT_HOME/bin/shutdown.sh"
            RETVAL=$?
        else
            RETVAL=1
        fi
        killed=false
        if [ ${RETVAL} -ne 0 ]; then
            echo "WARN: Artifactory Tomcat server shutdown script failed. Sending kill signal to $pidValue"
            if [ -n "$pidValue" ]; then
                killed=true
                kill ${pidValue}
                RETVAL=$?
            fi
        fi
        # Wait 2 seconds for process to die
        sleep 2
        findShutdownPort
        nbSeconds=1
        while [ ${SHUTDOWN_PORT} -ne 0 ] && [ ${nbSeconds} -lt 30 ]; do
            if [ ${nbSeconds} -eq 10 ] && [ -n "$pidValue" ]; then
                # After 10 seconds try to kill the process
                echo "WARN: Artifactory Tomcat server shutdown not done after 10 seconds. Sending kill signal"
                kill ${pidValue}
                RETVAL=$?
            fi
            if [ ${nbSeconds} -eq 25 ] && [ -n "$pidValue" ]; then
                # After 25 seconds try to kill -9 the process
                echo "WARN: Artifactory Tomcat server shutdown not done after 25 seconds. Sending kill -9 signal"
                kill -9 ${pidValue}
                RETVAL=$?
            fi
            sleep 1
            let "nbSeconds = $nbSeconds + 1"
            findShutdownPort
        done
        if [ ${SHUTDOWN_PORT} -eq 0 ]; then
            echo "Artifactory Tomcat stopped"
        else
            echo "ERROR: Artifactory Tomcat did not stop"
            RETVAL=1
        fi
    fi
    stopRouter
    stopReplicator
    stopMetadata

    [ $RETVAL=0 ] && rm -f ${ARTIFACTORY_PID} ${CATALINA_PID}
}

start_and_wait() {
    start
    if [ -e ${ARTIFACTORY_PID} ]; then
        PID=$(cat ${ARTIFACTORY_PID})
        while [ ! -e ~artifactory/logs/artifactory.log ]; do
            sleep 10
        done
        tail -f ~artifactory/logs/artifactory.log &
        terminating() {
            echo "Received stop"
            stop
            while [ -e ${ARTIFACTORY_PID} ] || [ ps ${PID} >/dev/null 2>&1 ]; do
                sleep 1
            done
            exit 0
        }
        trap terminating SIGINT SIGTERM
        while :; do
            sleep 5
        done
    fi
    echo Something went wrong ${PID} $?
}

status() {
    findShutdownPort
    if [ ${SHUTDOWN_PORT} -eq 0 ]; then
        if [ -e "$ARTIFACTORY_PID" ]; then
            echo "ERROR: Artifactory is stopped but the pid file $ARTIFACTORY_PID still exist"
            RETVAL=1
        else
            echo "Artifactory Tomcat stopped"
            RETVAL=3
        fi
    else
        echo "Artifactory Tomcat running"
        RETVAL=0
    fi
}

check() {
    if [ -f ${ARTIFACTORY_PID} ]; then
        echo "Artifactory is running, on pid="$(cat ${ARTIFACTORY_PID})
        echo ""
        exit 0
    fi

    echo "Checking arguments to Artifactory: "
    echo "ARTIFACTORY_HOME     =  $ARTIFACTORY_HOME"
    echo "ARTIFACTORY_USER     =  $ARTIFACTORY_USER"
    echo "TOMCAT_HOME          =  $TOMCAT_HOME"
    echo "ARTIFACTORY_PID      =  $ARTIFACTORY_PID"
    echo "JAVA_HOME            =  $JAVA_HOME"
    echo "JAVA_OPTIONS         =  $JAVA_OPTIONS"
    echo

    checkJavaVersion

    exit 1
}

checkJavaVersion(){
    if [[ -n "$JAVA_HOME" ]] && [[ -x "$JAVA_HOME/bin/java" ]];  then
        echo "Found java executable in JAVA_HOME ${JAVA_HOME}"
        _java="$JAVA_HOME/bin/java"
    elif type -p java; then
        _java=java
    else
        echo "no java"
    fi

    if [[ "$_java" ]]; then
        "$_java" -version 2>&1| \
        awk -F\" '/version/{\
            if ($2 < 1.8) {\
                printf "%s is too old must be at least java 1.8\n", $2;\
                exit 0;\
            } else exit 1}' && exit 99
    fi
}

###

artBinDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

artDefaultFile="/etc/opt/jfrog/artifactory/default"

. ${artDefaultFile} || errorArtHome "$artDefaultFile does not exist or not executable"

# Support old REPLICATOR_ENABLED
if [ "${REPLICATOR_ENABLED}" == true ]; then
    export START_LOCAL_REPLICATOR=true
fi

export REPLICATOR_DATA="${ARTIFACTORY_HOME}/replicator"
export METADATA_DATA="${ARTIFACTORY_HOME}/metadata"
replicatorScript=${artBinDir}/replicator/replicator.sh
metadataScript=${artBinDir}/metadata/metadata.sh
routerScript=${artBinDir}/../router/bin/router.sh

checkArtHome
checkArtPid
checkTomcatHome

# Basic variables used
CATALINA_MGNT_PORT=${CATALINA_MGNT_PORT:-8015}
CATALINA_PID_FOLDER=${TOMCAT_HOME}/temp
export CATALINA_PID="${CATALINA_PID_FOLDER}/tomcat.pid"
RETVAL=0

checkArtUser

case "$1" in
    start)
        checkJavaVersion
        start
        ;;
    wait)
        checkJavaVersion
        start_and_wait
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        start
        ;;
    redebug)
        stop
        ;;
    status)
        status
        ;;
    check)
        check
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|redebug|status|check}"
        exit 1
        ;;
esac

exit ${RETVAL}
