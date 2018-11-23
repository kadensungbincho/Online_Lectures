#!/bin/bash
case "$1" in
    start)
        /user/sbin/sshd
        ;;
    stop)
        kill $(cat /var/run/sshd.pid)
        ;;
esac
