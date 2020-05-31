package main

import (
	"context"
	"fmt"
	"io"
	"log"

	"google.golang.org/grpc"

	"./greetpb"
	"./sumpb"
)

func main() {

	fmt.Println("Hello I'm a client")

	cc, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	defer cc.Close()

	if err != nil {
		log.Fatalf("could not connect: %v", err)
	}

	c := greetpb.NewGreetServiceClient(cc)
	// cs := sumpb.NewSumServiceClient(cc)
	
	// fmt.Printf("Created client: %v", c)
	// doUnary(c)
	// doUnarySum(cs)

	doServerStreaming(c)

}

func doUnary(c greetpb.GreetServiceClient) {
	fmt.Println("Staring to do a Unary RPC...")
	req := &greetpb.GreetRequest{
		Greeting: &greetpb.Greeting {
			FirstName: "Kaden",
			LastName: "Cho",
		},
	}

	res, err := c.Greet(context.Background(), req) 
	if err != nil {
		log.Fatalf("error while calling Greet RPC: %v", err)
	}

	log.Printf("Response from Greet: %v", res.Result)
}

func doUnarySum(c sumpb.SumServiceClient) {
	fmt.Println("Starting to do a Sum Unary RPC...")

	req := &sumpb.SumRequest{
		Sum: &sumpb.Sum {
			A: 10,
			B: 3,
		},
	}

	res, err := c.Sum(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling Sum Unary RPC: %v", err)
	}

	log.Printf("Response from Sum: %v", res.Total)
}

func doServerStreaming(c greetpb.GreetServiceClient) {
	fmt.Println("Staring to do a ServerStreaming RPC...")

	req := &greetpb.GreetManyTimesRequest{
		Greeting: &greetpb.Greeting {
			FirstName: "Kaden", 
			LastName: "Cho",
		},
	}


	resStream, err := c.GreetManyTimes(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling GreetManyTimes RPC: %v", err)
	}

	for {
		msg, err := resStream.Recv()
		
		if err == io.EOF {
			break
		}

		if err != nil {
			log.Fatalf("error while reading stream: %v", err)
		}
		log.Printf("Response from GreetManyTimes: %v", msg.GetResult())
	}
}