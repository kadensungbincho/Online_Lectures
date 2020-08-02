package part2actors

import akka.actor.{Actor, ActorRef, ActorSystem, Props}

object ActorExercise2 extends App {
  /**
   * Exercise
   * 1. Recreate the Counter Actor with context.become and No Mutable State
   */

  object Counter {
    case object Increment
    case object Decrement
    case object Print
  }
  class Counter extends Actor {
    import Counter._

    override def receive: Receive = count(0)

    def count(cur: Int): Receive = {
      case Increment => context.become(count(cur + 1))
      case Decrement => context.become(count(cur - 1))
      case Print => println(s"[counter] cur: ${cur}")
    }
  }

  val system = ActorSystem("ActorExercise2")
  val counter = system.actorOf(Props[Counter])

  (1 to 5).foreach(_ => counter ! Counter.Increment)
  (1 to 3).foreach(_ => counter ! Counter.Decrement)
  counter ! Counter.Print

  /**
   * Exercise 2 - a simplified voting system
   *
   */
  case class Vote(candidate: String)
  case object VoteStatusRequest
  case class VoteStatusReply(candidate: Option[String])
  class Citizen extends Actor {
    var candidate: Option[String] = None

    override def receive: Receive = {
      case Vote(c) => context.become(voted(c)) // candidate = Some(c)
      case VoteStatusRequest => sender() ! VoteStatusReply(None)
    }

    def voted(candidate: String): Receive = {
      case VoteStatusRequest => sender() ! VoteStatusReply(Some(candidate))
    }
  }

  case class AggregateVotes(citizens: Set[ActorRef])
  class VoteAggregator extends Actor {
    override def receive: Receive = awaitingCommand

    def awaitingCommand: Receive = {
      case AggregateVotes(citizens) =>
        citizens.foreach(citizenRef => citizenRef ! VoteStatusRequest)
        context.become(awaitingStatuses(citizens, Map()))
    }

    def awaitingStatuses(stillWaiting: Set[ActorRef], currentStats: Map[String, Int]): Receive = {
      case VoteStatusReply(None) =>
        sender() ! VoteStatusRequest
      case VoteStatusReply(Some(candidate)) =>
        val newStillWaiting = stillWaiting - sender()
        val currentVotesOfCandidates = currentStats.getOrElse(candidate, 0)
        val newStats = currentStats + (candidate -> (currentVotesOfCandidates + 1))

        if (newStillWaiting.isEmpty) {
          println(s"[aggregator] poll stats: $newStats")
        } else {
          context.become(awaitingStatuses(newStillWaiting, newStats))
        }
    }
  }

  val alice = system.actorOf(Props[Citizen])
  val bob = system.actorOf(Props[Citizen])
  val charlie = system.actorOf(Props[Citizen])
  val daniel = system.actorOf(Props[Citizen])

  alice ! Vote("Martin")
  bob ! Vote("Jonas")
  charlie ! Vote("Roland")
  daniel ! Vote("Roland")

  val voteAggregator = system.actorOf(Props[VoteAggregator])
  voteAggregator ! AggregateVotes(Set(alice, bob, charlie, daniel))

  /*
    Print the status of the votes

   */
}
