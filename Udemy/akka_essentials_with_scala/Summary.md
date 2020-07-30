# Thread model limitations
- oop is not encapsulated
    - race conditions

- Locks to the rescue?
    - deadlocks, livelocks, headaches
    - a massive pain in distributed environments

- Delegating tasks
    - hard, error-prone
    - never feels "first-class" although often needed
    - should never be done in a blocking fashion

- Dealing with Error
    - a monumental task in even small systems


# The Akka Actor model
- With traditional objects:
    - we store their state as data
    - we call their methos

- with actors:
    - we store their state as data
    - we send messages to them, asynchronously

Actors are objects we can't access directly, but only send messages to.

## Some natural principles
- every interaction happens via sending and receiving messages
- messages are asynchronous by nature
    - it takes time for a message to travel
    - sending and receiving may not happen at the same time

# Actors, Messages, Behaviors
- Actors are uniquely identified
- Messages are asynchronous
- Each actor may respond differently
- Actors are encapsulated