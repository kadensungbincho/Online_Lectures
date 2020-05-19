# Intro
1. Introducing to memory grid
2. Build a srping boot application with Hazelcast embedded
3. Load bulk data from MySQL using JPA in to the memory grid. Introduce memory leaks and see how we fix it
4. Query distributed data
5. Distributed locks
6. Distributed Computing
7. Concurrency issues
8. Data Structures
9. Cluster Monitoring

- Tools used
    - IntelliJ, Gradle, Hazelcast management console, MySQL, VisualVM


# what aree memory grids?
- An in memory grid is a data structure that resides entirely in RAM and is distributed among multiple servers.

- features
    - distributed
    - elastic
    - resilient


# Querying Data
- predicate

```java
IMap<Integer, Student> map = hazelcastInstance.getMap("students");
Predicate greaterEqual = Predicates.greaterEqual("age", 18);
PagingPredicate pagingPredicate = new PagingPredicate(greaterEqual, 5);

// Retreive the first page
Collection<Student> values = map.values(pagingPredicate);

// Set up next page
pagingPredicate.nextPage();

// Retrieve next page
values = map.values(pagingPredicate);
```

- SQL Predicate
```java
IMap<Employee> map = hazelcastInstance.getMap("customers");
Set<Employee> customers = map.values(new SQLPredicate("firstName like Josh%"));
``` 

- Indexing
```java
map.addIndex("age", true);
map.addIndex("active", false);
``` 

# Distributed Locks
- Distributed locks are used if you want a block of code to be executed strictly by one sinle node in a cluster

- Single JVM
use synchronized

- Use cases
    - Writing end results to a distributed file like HDFS
    - MongoDB : multi document transactions
    - Long running process that coordinates with multiple system calls

```java
Lock myLock = hazelcastInstance.getLock("myLock");

try {
    myLock.lock();

}

finally {
    myLock.unlock();
}
``` 

# Distributed Computing
- write a executor that implements callable or runnable
- create an instance of executor from hazelcast and submit the callable / runnable

# Concurreny Issues
```java
Integer score = map.get("score");

score = score + 2000;
map.put("score", score);
```

```java
map.lock("score");

Interger score = map.get("score");
score = score + 2000;
map.put("score", score);

map.unlock("score");
```

```java
map.replace(key, oldValue, newValue);
```

# Data Structures
- Queue
    - FIFO
- Topic
    - Pub / Sub model
- Multi Map
    - Specialized map where you can associate a key with multiple values
- Set and List
    - distributed in nature

# monitoring

