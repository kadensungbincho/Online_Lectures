package part1

import scala.concurrent.Future

object AdvancedRecap extends App {

  // partial functions
  val partialFunctions: PartialFunction[Int, Int] = {
    case 1 => 42
    case 2 => 65
    case 5 => 999
  }

  val pf = (x: Int) => x match {
    case 1 => 42
    case 2 => 65
    case 5 => 999
  }

  val function: (Int => Int) = partialFunctions

  val modifiedList = List(1, 2, 3).map({
    case 1 => 42
    case _ => 0
  })

  // lifting
  val lifted = partialFunctions.lift
  lifted(2) // Some(65)
  lifted(5000) // None

  // orElse
  val pfChain = partialFunctions.orElse[Int, Int] {
    case 60 => 9000
  }

  pfChain(5)  // 999
  pfChain(60) // 9000
  pfChain(457) // throw a MatchError

  type ReceiveFunction = PartialFunction[Any, Unit]

  def receive: ReceiveFunction = {
    case 1 => println("hello")
    case _ => println("confused...")
  }

  // implicits
  implicit val timeout = 3000
  def setTimeout(f: () => Unit)(implicit  timeout: Int) = f()

  setTimeout(() => println("timeout")) // extra parameter list omitted

  // implicit conversions
  // 1) implicit defs
  case class Person(name: String) {
    def greet = s"Hi, my name is $name"
  }

  implicit def fromStringToPerson(string: String): Person = Person(string)

  "Peter".greet
  // fromStringToPerson("Peter").greet - automatically done by the compiler

  // 2) implicit classes
  implicit class Dog(name: String) {
    def bark = println("bark!")
  }

  "Lassie".bark
  // new Dog("Lassie").bark

  // organized
  // local scope
  implicit val inverseOrdering: Ordering[Int] = Ordering.fromLessThan(_ > _)

  List(1, 2, 3).sorted // List(3, 2, 1)

  // imported scope
  import scala.concurrent.ExecutionContext.Implicits.global
  val future = Future {
    println("hello futue")
  }

  // companion objects of the types included in the call

  object Person {
    implicit val personOrdering: Ordering[Person] = Ordering.fromLessThan((a, b) => a.name.compareTo(b.name) < 0)
  }

  List(Person("Bob"), Person("Alice")).sorted
}
