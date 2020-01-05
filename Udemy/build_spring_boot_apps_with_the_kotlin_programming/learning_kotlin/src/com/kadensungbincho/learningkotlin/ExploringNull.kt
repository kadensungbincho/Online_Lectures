package com.kadensungbincho.learningkotlin

fun main(args: Array<String>) {
//    var name: String = null
    var name: String? = null

//    name = "Kaden"


//    println(name.toUpperCase()) // cannot call a nullable string, avoid null point exceptio
    // if condition check for name
//    println("$name".toUpperCase()) // to avoid null case

    // null safe operator
//    println(name?.toUpperCase())

    // non null asserted operator, use with caution
    val result = name!!.toUpperCase()
    println(result)

    var address = null // automatically assigned with nothing class

//    address = "Hello"

    var myInteger = 7

//    myInteger = null

}
