package part2actors

import akka.actor.{Actor, ActorLogging, ActorSystem, Props}
import akka.event.Logging

object ActorLoggingDemo extends App {

  class SimpleActorWithExplicitLogger extends Actor {
    val logger = Logging(context.system, this)

    override def receive: Receive = {
      case message => logger.info(message.toString)
    }
  }

  val system = ActorSystem("actorLogging")
  val actor = system.actorOf(Props[SimpleActorWithExplicitLogger])

  actor ! "This should be logged into the logger"


  // #2 ActorLogging
  class ActorWithLogging extends Actor with ActorLogging {
    override def receive: Receive = {
      case message => log.info(message.toString)
      case (a, b) => log.info("two thingns: {} and {}", a, b)
    }
  }
  // Logging is asynchronous

}
