package com.kadensungbincho.learningkotlin

class Customer(val name: String,
               val address: String,
               var age: Int) {

    constructor(name: String, age: Int): this(name, "", age) {
        println("secondary constructor")
    }
    init {
        println("init block")
    }
}

data class CustomerData(val name: String,
               val address: String,
               var age: Int) {

    constructor(name: String, age: Int): this(name, "", age) {
        println("secondary constructor")
    }
    init {
        println("init block")
    }
}

class AlternativeCustomer(val name: String, val age: Int) {
    var address: String

    init {
        address = ""
    }

    constructor(name: String, address: String, age: Int): this(name, age) {
        this.address = address
    }
}

class Customer3(val name: String, var age: Int, val address: String = "")


class Customer4(val name: String, var age: Int, val address: String = "") {
    var approved: Boolean = false

    set(value) {
        if(age >= 21) {
            field = value
        } else {
            println("You can't approve a customer under 21 years old")
        }
    }

    val nextAge
    get() = age + 1

    fun uppercaseName() = name.toUpperCase()

    override fun toString() = "$name $address $age"

    companion object {
        fun getInstance() = Customer4("kaden", 10, "cho")
    }

    // componentN function
    operator fun component1() = name
    operator fun component2() = address
}


fun main(args: Array<String>) {
    val customer = Customer("Kaden", "name", 21)
    customer.age = 30
    val customer2 = Customer("Kaden", 31)
    println(customer.name)
    println(customer2.name)
    val customer3 = Customer3("Kaden", 10)
    println(customer3.age)

    val customerData = CustomerData("Kaden", 29)
    println(customerData)
    val customerData1 = customerData.copy(name="Diane")
    println(customerData1)

    val (name, address, age) = customerData1 // destructuring
    println(age)

}
