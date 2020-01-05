package com.kadensungbincho.utilities

fun toSentenceCase(input: String) : String {
    return input[0].toUpperCase() + input.substring(1)
}

fun main(args: Array<String>) {
    println(toSentenceCase("hello"))
}
