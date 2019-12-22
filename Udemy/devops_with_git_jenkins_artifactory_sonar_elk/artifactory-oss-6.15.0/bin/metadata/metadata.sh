#!/bin/bash
#
# Startup script for Artifactory Metadata
#


## By default mac doesnt have pidof command, this little hack should solve this design issue
macPidof() {
    export myPID=$(ps axc|awk "{if (\$5~\"$1\") print \$1}")
    return $myPID
}

## configure on which port artifactory (access) is running to connect to..
setUpConnection(){
    export JFROG_ACCESS_PORT="${JFROG_ACCESS_PORT:-8081}"
    ACCESS_XML=$ARTIFACTORY_HOME/tomcat/conf/Catalina/localhost/access.xml
    if [[ -f "$ACCESS_XML" ]];then
        export ACCESS_PATH=$(grep path $ACCESS_XML | awk '{ print $2}'  | cut -d'=' -f2 | sed -e 's|/||' -e 's|"||g')
        if [ -z $ACCESS_PATH ]; then
            export ACCESS_PATH="access"
        fi
    else
        export ACCESS_PATH="access"
    fi
    export METADATA_ACCESSCLIENT_URL=${METADATA_ACCESSCLIENT_URL:-"http://localhost:${JFROG_ACCESS_PORT}/$ACCESS_PATH"}
}



exitError() {
    echo -e "\n\033[31mERROR: $1\033[0m\n"

    [ -z "${2}" ] || usage
    exit 1
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_NAME=$(basename $0)

NAME=Metadata
METADATA_DATA=${METADATA_DATA:-"${SCRIPT_DIR}/../../metadata"}
export METADATA_HOME=$METADATA_DATA
WAIT_FOR_ARTIFACTORY_LIMIT=180

METADATA_PID=${METADATA_DATA}/run/metadata.pid
METADATA_LOG=${METADATA_DATA}/logs/metadata.log
METADATA_BIN=

createMetadataBootstrap() {

     pushJson() {
       echo '{' "$jsonData" '}' > $METADATA_DATA/etc/bootstrap.json
    }

    export master_key=${ARTIFACTORY_HOME}/etc/security/master.key
    export join_key=${ARTIFACTORY_HOME}/metadata/etc/security/join.key
    export db_properties_path=${ARTIFACTORY_HOME}/etc/db.properties
    export node_properties_path=${ARTIFACTORY_HOME}/etc/ha-node.properties

    export jsonData="\"master_key\":\"${master_key}\",
              \"join_key\":\"${join_key}\",
              \"db_properties_path\":\"${db_properties_path}\""
     mkdir -p $METADATA_DATA/etc
     pushJson
    if [[ -f ${ARTIFACTORY_HOME}/etc/ha-node.proporties ]]; then
        export jsonData=${jsonData}",
        \"node_properties_path\":\"${node_properties_path}\""
        pushJson
    fi
}


usage() {
    cat << END_USAGE

${SCRIPT_NAME} - script for controlling ${NAME}

Usage: ./${SCRIPT_NAME} <action>

action:    help|start|stop|restart|status


END_USAGE

    exit 1
}

# Process command line options. See usage above for supported options
processOptions () {
    # Get action - help|start|stop|restart|status
    ACTION=${1}
    shift

    if [[ ! "${ACTION}" =~ ^(help|start|stop|restart|status)$ ]]; then
        usage
    fi

    if [[ ! "${ACTION}" =~ ^(help|start|stop|restart|status)$ ]]; then
        usage
    fi

    if [[ "${ACTION}" =~ ^help$ ]]; then
        usage
    fi

    # Process the options
    while [[ $# > 0 ]]; do
        case "$1" in
            *)
                usage
            ;;
        esac
    done

}

setExecutable() {
    local os=$(uname -s)
    local arch=$(uname -m)

    # Resolve OS
    case ${os} in
        Linux)
            os=linux
        ;;
        Darwin)
            os=darwin
        ;;
        *)
            exitError "OS type ${os} is not supported"
        ;;
    esac

    # Resolve cpu Architecture
    case ${arch} in
        x86_64)
            arch=amd64
        ;;
        *)
            exitError "CPU architecture ${arch} is not supported"
        ;;
    esac

    METADATA_BIN=${SCRIPT_DIR}/metadata-${os}-${arch}
}

isRunning() {
    local ps=
    # Set binary to run
    setExecutable
    local bin=${METADATA_BIN}
    # Check running state by PID
    if [ -e "${METADATA_PID}" ]; then
        PID_VALUE=$(cat ${METADATA_PID})
        if [ -n "${PID_VALUE}" ]; then
            if [[ "$(uname -s )" == "Darwin" ]]; then
               macBIN=$(echo $bin| awk -F/ '{print $NF}')
               macPidof "${macBIN}"
               if [[ ! -z "${myPID}" ]];then 
                  export ps="${myPID}"
               fi
            else
               export ps=$(pidof ${bin})
            fi            
        fi
    else
        # Try and find by process
        ps=$(ps -ef | grep -i ${bin} | grep -v grep 2> /dev/null)
        PID_VALUE=$(echo -n ${ps} | awk '{print $2}')
    fi
    if [ -z "${ps}" ]; then
        if [ -z "${PID_VALUE}" ]; then
            return 1 # Not running
        else
            return 2 # PID exists but process dead
        fi
    else
        return 0 # Is running
    fi
}

start() {
    echo "Starting ${NAME}..."

    # Check if running
    isRunning
    case $? in
        0)
            echo "${NAME} is already running (PID: ${PID_VALUE})"
            restart
            exit 0
        ;;
        1)
#            echo "${NAME} not running. Proceed to start it up."
        ;;
        2)
            echo "PID exists (${PID_VALUE}), but ${NAME} not running. Proceed to start it up."
        ;;
        *)
            exitError "Function isRunning() returned an unknown value ($?)"
        ;;
    esac

    # Start metadata
    createMetadataBootstrap
    mkdir -p ${METADATA_DATA}/logs
    mkdir -p ${METADATA_DATA}/run

    # Run from METADATA_DATA to avoid nohup errors
    cd ${METADATA_DATA}

    setUpConnection

    echo "METADATA_ACCESSCLIENT_URL: $METADATA_ACCESSCLIENT_URL"
    ${METADATA_BIN} >> ${METADATA_DATA}/logs/console_out.log 2>&1 &
    local pid=$!
    echo -n ${pid} > ${METADATA_PID}

    echo "${NAME} started. PID: ${pid}"
}

stop() {
    echo "Stopping ${NAME}..."

    # Check if running
    isRunning
    case $? in
        0)
            echo "${NAME} is running (PID: ${PID_VALUE}). Stopping it..."
        ;;
        1)
            echo "${NAME} not running."
            exit 0
        ;;
        2)
            echo "PID exists (${PID_VALUE}), but ${NAME} not running. Removing PID file..."
            rm -f ${METADATA_PID}
            exit 0
        ;;
        *)
            exitError "Function isRunning() returned an unknown value ($?)"
        ;;
    esac

    # Kill using PID
    kill ${PID_VALUE} || exitError "Stopping ${NAME} failed"
    rm -f ${METADATA_PID}
    echo "${NAME} stopped"
}

restart() {
    echo "Restarting ${NAME}..."
    ${SCRIPT_DIR}/${SCRIPT_NAME} stop
    ${SCRIPT_DIR}/${SCRIPT_NAME} start $*
}

status() {
    echo -n "${NAME} is "

    # Check if running
    isRunning
    case $? in
        0)
            echo "running (PID: ${PID_VALUE})"
        ;;
        1)
            echo "not running"
        ;;
        2)
            echo "PID exists (${PID_VALUE}), but ${NAME} not running."
        ;;
        *)
            exitError "Function isRunning() returned an unknown value ($?)"
        ;;
    esac
}

processOptions $*
eval ${ACTION}
