package com.kadensungbincho.learningkotlin

import java.io.FileInputStream
import java.lang.ArithmeticException

@Throws(InterruptedException::class)
fun divide(a: Int, b: Int): Double {
    Thread.sleep(1000)
    return (a.toDouble() / b)
}

fun printFile() {
    val input = FileInputStream("file.txt")
    input.use {
        // as exception could be thrown here
    }
}

fun main(args: Array<String>) {
//    try {
//        println(10 / 0)
//    } catch(e: ArithmeticException) {
//        println("caught")
//    }
    val result = try {
        divide(5, 23)
    } catch(e: Exception) {
        println(e)
        0
    }
    println(result)
}
