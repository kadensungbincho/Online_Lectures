package com.learnreactivespring.fluxandmono;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.ConnectableFlux;
import reactor.core.publisher.Flux;

import java.time.Duration;

public class ColdAndHotPublisherTest {

    @Test
    public void coldPublisherTest() throws InterruptedException {

        Flux<String> stringFlux = Flux.just("A", "B", "C", "D", "E", "F")
                .delayElements(Duration.ofSeconds(1));

        stringFlux.subscribe(s -> System.out.println("Subscriber 1 : " + s));

        Thread.sleep(2000);

        stringFlux.subscribe(s -> System.out.println("Subscriber 2 : " + s));

        Thread.sleep(4000);
    }

    @Test
    public void hotPublisherTest() throws InterruptedException {
        Flux<String> stringFlux = Flux.just("A", "B", "C", "D", "E", "F")
                .delayElements(Duration.ofSeconds(1));

        ConnectableFlux<String> connectableFlux = stringFlux.publish();
        connectableFlux.connect();
        connectableFlux.subscribe((s) -> System.out.println("Subscriber 1 : " + s));

        Thread.sleep(3000);

        connectableFlux.subscribe((s) -> System.out.println("Subscriber 2 : " + s));  // does not emit from the init "A"

        Thread.sleep(4000);
    }
}
