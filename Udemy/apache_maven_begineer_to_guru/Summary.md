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

# Maven Wagon

# Maven Project Object Model
- POM
- The pom.xml is a XML document which describes a Maven Project
- Must comply with the maven-4.0.0.xsd
- POMs can inherit properties from a parent POM
- Effective POM is the POM complete with ingerited properties

# Maven Dependencies

- Dependency scope
    - compile
    - provided
    - runtime
    - test
    - system
    - import

# Maven Build Lifecycles
- Maven is baed on the concept of build lifecycles
- A lifecycle is a pre-defined group of build steps called phases
- Each phase can be bound to one or more plugin goals
- Keep in mind all work done in Maven is done by plugins
- Lifecycles and phases provide the framework to call plugin goals in a sequence

- Three pre-defined lifecycles: clean, default, site
    - clean
        - does a clean of the project, removes all build artifacts from working directory
        - defined with plugin bingins
    - default
        - does the build and deployment of your project
    - site 
        - creates the a website for your project
        - defined with plugin bindings
        - least used
        
- default lifecycle
    - validate
    - compile
    - test
    - package
    - verify
    - install
    - deploy

# Maven Wrapper

# Maven Archetype
- project templates
- "An original pattern or model from with all other things of the same kind are made"

# Overview Maven Lifecycle Plugins
- clean
    - purpose is to remove files generated during build process
- compiler plugin
    - compiler:compile, compiler:testCompile
    - by default uses the compiler javax.tools.JavaCompiler
- resources
    - lifecycle: default
    - resources:resources, resources:testResources, resource:copy-resources
- surefire
    - surefire:test
- jar
    - jar:jar, jar:test-jar
    - purpose is to build jars from compiled artifacts and project resources
- deploy
    - deploy:deploy, deploy:deploy-file
    - purpose is to deploy project artifacts to remote maven repositories
- site
    - site, deploy, run, stage, stage-deploy, attach-descriptor, jar, effective-site