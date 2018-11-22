#!/bin/bash

my_function() {
    GLOBAL_VAR=1
}
# not yet assigned
echo $GLOBAL_VAR
my_function
# available
echo $GLOBAL_VAR
