package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"time"

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

	// doServerStreaming(c)
	doClientStreaming(c)

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

func doClientStreaming(c greetpb.GreetServiceClient) {
	fmt.Println("Staring to do a Client Streaming RPC...")

	requests := []*greetpb.LongGreetRequest {
		&greetpb.LongGreetRequest{
			Greeting: &greetpb.Greeting {
				FirstName: "Kaden",
				LastName: "Cho",
			},
		},
		&greetpb.LongGreetRequest{
			Greeting: &greetpb.Greeting {
				FirstName: "Olivia",
				LastName: "Song",
			},
		},
		&greetpb.LongGreetRequest{
			Greeting: &greetpb.Greeting {
				FirstName: "Jade",
				LastName: "Kim",
			},
		},
		&greetpb.LongGreetRequest{
			Greeting: &greetpb.Greeting {
				FirstName: "Lee",
				LastName: "Chua",
			},
		},
		&greetpb.LongGreetRequest{
			Greeting: &greetpb.Greeting {
				FirstName: "Bob",
				LastName: "Sam",
			},
		},
	}
	stream, err := c.LongGreet(context.Background())

	if err := nil {
		log.Fatalf("error while calling LongGreet: %v", err)
	}

	for _, req := range requests {
		fmt.Printf("Sending req: %v", req)
		stream.Send(req)
		time.Sleep(100 * time.Millisecond)
	}
	
	res, err := stream.CloseAndRecv()

	if err != nil {
		log.FatalF("error while receiving response")
	}

	fmt.Printf("LongGreet Response: %v\n", res)
}