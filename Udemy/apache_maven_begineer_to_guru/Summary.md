# Why use apache maven?
- Maven has ~ 70% of the build tool market for Java applications
    - ~20% of marketshare: Gradle
    - ~10% of marketshare: Ant
- Very common in large companies


- Advantages
    - Quick Project setup
        - Maven brings conventions over configuration, thus reducing setup time
    - Projects are modular
    - Mature Dependency management
    - Mature Project Build Lifecycle
    - Robust plugin community

- Apache Maven - De Facto Standard
    - Apache Maven has stablished 'standards' used by other build tools
        - Maven Standard Directory Layout: In most part adapted by other tools such a Gradle
        - Artifact naming: Apache Maven helped establish how Java artifacts are named
        - Artifact Repositories: Apache Maven established the structure of artifacgt repositories
    - Prior to Maven these 'standards' did not exist
    - New build tools are compatible with these 'standards'

- Maven Disadvantages
    - Projects are described in and XML document, constrained by an XML schema
         - Some consider XML 'dated'
    - Gradle uses a Grooby DSL, which can offer greater flexibility
         - Rare the additional flexibility is needed

# Review of Java Compile and Packaging

- Java Packaging
    - *.jar: java archive 
    - *.war: web application archive
    - *.ear: enterprise archive
    - fat jar: executable jar containing all dependencies
    - docker container

- Java Deployment
    - Simple Jar files are typically collection of class files used to compose applications
    - WAR, EAR files are typically complete applications which are deployed to application servers
        - tomcat . weboss, 
    - Fat / Uber jars are typically complete applications which contain embedded application servers
        - can be deployed stand alone
    - Docker images are complete applications which cann be deployed stand alone

# Creating Java Jar file from Command line
```bash
jar cf myjar.jar HelloWorld.class 
java -classpath myjar.jar HelloWorld
```

# Using 3rd Jars

# Compiling and Packaging using Maven

# Including Dependencies with Maven