#!/bin/bash

function hello() {
    echo "Hello!"
    now
    now2
}
function now() {
    echo "It's $(date +%r)"
}
hello
# This won't be executed
function now2() {
    echo "It's now2"
}
