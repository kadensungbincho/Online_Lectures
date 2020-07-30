package part2actors

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import part2actors.ActorExercise.BankAccount.{Deposit, Withdraw}
import part2actors.ActorExercise.Counter.{Decrement, Increment, Print}
import part2actors.ActorExercise.Person.LiveTheLife

object ActorExercise extends App {
  /**
   * Exercises
   *
   * 1. a counter actor
   *  - increment
   *  - decrement
   *  - print
   *
   *  2. a Bank account as an actor
   *  receives
   *  - deposit an amount
   *  - withdraw an amount
   *  - statement
   *  replies with
   *  - success
   *  - failure
   *
   *  interact with some other kind of actor
   */

  class CounterActor extends Actor {
    var count = 0

    override def receive: Receive = {
      case n: Int => count += n
      case _ => println(s"[$self] Count: $count")
    }
  }

  val system = ActorSystem("actorCapabilitiesDemo")
  val myCounter = system.actorOf(Props[CounterActor], "myCounter")

  myCounter ! -10
  myCounter ! 20
  myCounter ! ""

  // Domain of the counter
  object Counter {
    case object Increment
    case object Decrement
    case object Print
  }
  class Counter extends Actor {
    import Counter._
    var cnt = 0

    override def receive: Receive = {
      case Increment => cnt += 1
      case Decrement => cnt -= 1
      case Print => println(s"[counter] My current count is $cnt")
    }
  }

  val counter = system.actorOf(Props[Counter], "counter")

  (1 to 5).foreach(_ => counter ! Increment)
  (1 to 3).foreach(_ => counter ! Decrement)
  counter ! Print

  object BankAccount {
    case class Deposit(amount: Int)
    case class Withdraw(amount: Int)
    case object Statement

    case class TransactionSuccess(message: String)
    case class TransactionFailure(reason: String)
  }
  class BankAccount extends Actor {
    import BankAccount._

    var funds = 0

    override def receive: Receive = {
      case Deposit(amount) =>
        if (amount < 0) sender() ! TransactionFailure("Invalid deposit amount")
        else {
          funds += amount
          sender() ! TransactionSuccess(s"successfully deposited $amount")
        }
      case Withdraw(amount) =>
        if (amount < 0) sender() ! TransactionFailure("Invalid withdraw amount")
        else if (amount > funds) sender() ! TransactionFailure("Insufficient funds")
        else {
          funds -= amount
          sender() ! TransactionSuccess(s"successfully withdraw $amount")
        }
      case Statement => sender() ! s"Your balance is $funds"
    }
  }

  object Person {
    case class LiveTheLife(account: ActorRef)
  }
  class Person extends Actor {
    import Person._
    import BankAccount._

    override def receive: Receive = {
      case LiveTheLife(account) =>
        account ! Deposit(10000)
        account ! Withdraw(90000)
        account ! Withdraw(500)
        account ! Statement
      case message => println(message.toString)
    }
  }

  val account = system.actorOf(Props[BankAccount])
  val person = system.actorOf(Props[Person], "billionaire")

  person ! LiveTheLife(account)
}
