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

# Protocol Buffers & Language Interoperability
- Efficiency of PB over JSON
    - JSON: 55 bytes -> PB 20 bytes
    - Save in network bandwidth
    - Parsing JSON is actually CPU intensive

- https://grpc.io

# HTTP2
- gRPC leverages HTTP/2 as a backbone for communications
- https://imagekit.io/demo/http2-vs-http1
- Http/2 is the newer standard for internet communications that address common pitfall of http/1.1 on modern web pages

- How HTTP/1.1 works
    - was released in 1997
    - opens a new TCP connection to a server at each request
    - It does not compress header (which are plaintext)
    - only works with Req / Res mechanism (no server push)
    - nowadays, a web page loads 80 assets on average
    - headers are sent at every request and are plaintext (heavy size)
    - each request opens a TCP connection
    - These inefficiencies add latency and increase network packet size

- How HTTP/2 works
    - was released in 2015 , SPDY
    - supports multiplexing
        - the client & server can push messages in parallel over the same TCP connection
        - this greatly reduces latency
    - HTTP2 supports server push
        - Servers can push streams for one request from the client
        - this saves round trips
    - supports header compression
        - headers can now be compressed
        - these have much less impact on the packet size
        - (remember the average http request may  have over 20 headers, due to cookies, content cache, and application headers)
    - binary
        - While http/1 text makes it easy for debugging, it's not efficient over the network
        - (protocol buffers is a binary protocol and makes it a great match for HTTP2)
    - HTTP/2 is secure

# 4 Types of API in gRPC
- Unary
    - classic client, server req & res
    - traditional API looks like
- Server Streaming
    - req -> stream of multiple responses from the server
- Client Streaming
    - stream of multiple requests from the client
- Bi Directional Streaming
    - stream of multiple reqs and stream of multiple res

# Scalability in gRPC
- are asynchronous by default
- can server millions of reqeusts in parallel
- gRPC Clients can be asynchronous or synchronous
- The client decides which model works best for the performance needs
- gRPC clients can perform client side load balancing

- Google has 10 Billion gRPC requests being made per second

# Security in gRPC (SSL)
- By default gRPC strongly advocates for you to use SSL
- Each language will provide an API to load gRPC with the required certificates and provide encryption capability out of the box
- Additionally using Interceptors, we can also provide authentication

# gRCP vs Rest
|gRPC|Rest|
|---|---|
|Protocol Buffers - smaller, faster|JSON - text based, slower, bigger|
|http/2 - from 2015|http1.1 from 1997|
|bidirectional & async|client -> server req only|
|stream support|req / res only|
|api oriented "what"|CRUD oriented|
|code generation through PB|Code generation through OpenAPI / Swagger|
|RPC based|HTTP verbs based|

- https://husobee.github.io/golang/rest/grpc/2016/05/28/golang-rest-v-grpc.html


# Unary API
- basic Req / Res that everyone is familiar with


# Bi Directional Streaming API?
- The number of requests and responses does not have to match

# Advanced gRPC
- Error Codes
    - http://avi.im/grpc-errors/