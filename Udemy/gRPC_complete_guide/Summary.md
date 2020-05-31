# gRPC Introduction
- Today's trend is to build microservices
- Microservices are built in different language and encompass a function of your business

- These microservices must exchange info and need to agree on:
    - API to exchange data
    - The data format
    - The error pattern
    - Load Balacing
    - Many other

- One of the popular choice for building API is REST

- gRPC
    - gRPC is part of the Cloud Native Computation Foundation like Docker & Kubernetes
    - At a high level, it allows you to define REQUEST and RESPONSE for RPC and handles all the rest for you
    - On top of it, it's modern, fast and efficient, build on top of HTTP/2. low latency, supports streaming, language independent, and makes it super easy to plug in authentication, load balancing, logging and monitoring

- RPC?
    - Remote Procedure Call
    - In your client code, it looks like you're just calling a function directly on the server, but it actually happens on the network

- How to get started?
    - At the core og gRPC, you need to define the messages and services using Protocol buffers
    - The rest of the gRPC code will be genereated for you and you'll have to provide an implementation for it
    - One .proto file works for over 12 programming languages (server and client), and allows you to use a framework that scales to millions of RPC per seconds
    
- Why protocol buffers?
    - protocol buffers are language agnostic
    - Code can be generated for pretty much any language
    - Data is binary and efficiently serialized
    - Very convenient for transporting a log of data
    - Protocol Buffers allows for easy API evolution using rules