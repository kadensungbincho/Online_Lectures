#!/bin/bash
MY_SHELL="bash"

if [ "$MY_SHELL" = "bash" ]
then
    echo "You seem to like the bash shell."
elif [ "$MY_SHEEL" = "csh" ]
then
    echo "You seem to like the csh shell."
else 
    echo "I don't know what you like."
fi
