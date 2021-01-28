package com.learnreactivespring.fluxandmono;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;

import java.time.Duration;

public class FluxAndMonoErrorTest {

    @Test
    public void fluxErrorHandling() {
        Flux<String> stringFlux = Flux.just("A", "B", "C")
                .concatWith(Flux.error(new RuntimeException("Exception")))
                .concatWith(Flux.just("D"))
                .onErrorResume((e) -> {
                    System.out.println("Exception is " + e);
                    return Flux.just("default", "default1");
                })
                .log()
                ;

        StepVerifier.create(stringFlux)
                .expectSubscription()
                .expectNext("A", "B", "C")
//                .expectError(RuntimeException.class)
//                .verify()
                .expectNext("default", "default1")
                .verifyComplete()
                ;
    }

    @Test
    public void fluxErrorHandling_onErrorReturn() {
        Flux<String> stringFlux = Flux.just("A", "B", "C")
                .concatWith(Flux.error(new RuntimeException("Exception")))
                .concatWith(Flux.just("D"))
                .onErrorReturn("default")
                .log()
                ;

        StepVerifier.create(stringFlux)
                .expectSubscription()
                .expectNext("A", "B", "C")
                .expectNext("default")
                .verifyComplete()
        ;
    }

    @Test
    public void fluxErrorHandling_onErrorMap() {
        Flux<String> stringFlux = Flux.just("A", "B", "C")
                .concatWith(Flux.error(new RuntimeException("Exception")))
                .concatWith(Flux.just("D"))
                .onErrorMap((e) -> new RuntimeException("Custom error"))
                .log()
                ;

        StepVerifier.create(stringFlux)
                .expectSubscription()
                .expectNext("A", "B", "C")
                .expectError(RuntimeException.class)
                .verify()
                ;
    }

    @Test
    public void fluxErrorHandling_onErrorMap_withRetry() {
        Flux<String> stringFlux = Flux.just("A", "B", "C")
                .concatWith(Flux.error(new RuntimeException("Exception")))
                .concatWith(Flux.just("D"))
                .onErrorMap((e) -> new RuntimeException("Custom error"))
                .retry(2)
                .log()
                ;

        StepVerifier.create(stringFlux)
                .expectSubscription()
                .expectNext("A", "B", "C")
                .expectNext("A", "B", "C")
                .expectError(RuntimeException.class)
                .verify()
                ;
    }
}
