package com.learnreactivespring.fluxandmono;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;

import java.time.Duration;

public class FluxAndMonoWithTimeTest {

    @Test
    public void infiniteSequence() throws InterruptedException {

        Flux<Long> infiniteFlux = Flux.interval(Duration.ofMillis(200))
                .log()
                ;

        infiniteFlux
                .subscribe((e) -> System.out.println("Value is : " + e));

        Thread.sleep(3000);
    }

    @Test
    public void infiniteSequenceTest() {
        Flux<Long> infiniteFlux = Flux.interval(Duration.ofMillis(200))
                .take(3)
                .log()
                ;

        StepVerifier.create(infiniteFlux)
                .expectSubscription()
                .expectNext(0L, 1L, 2L)
                .verifyComplete()
        ;
    }

    @Test
    public void infiniteSequenceMap() {
        Flux<Integer> infiniteFlux = Flux.interval(Duration.ofMillis(200))
                .map(l -> l.intValue())
                .take(3)
                .log()
                ;

        StepVerifier.create(infiniteFlux)
                .expectSubscription()
                .expectNext(0, 1, 2)
                .verifyComplete()
        ;
    }

    @Test
    public void infiniteSequenceMap_withDelay() {
        Flux<Integer> infiniteFlux = Flux.interval(Duration.ofMillis(200))
                .delayElements(Duration.ofSeconds(1))
                .map(l -> l.intValue())
                .take(3)
                .log()
                ;

        StepVerifier.create(infiniteFlux)
                .expectSubscription()
                .expectNext(0, 1, 2)
                .verifyComplete()
        ;
    }
}
