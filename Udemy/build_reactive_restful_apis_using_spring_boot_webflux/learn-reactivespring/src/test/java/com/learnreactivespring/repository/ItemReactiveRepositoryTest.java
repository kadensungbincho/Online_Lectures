package com.learnreactivespring.repository;

import com.learnreactivespring.document.Item;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.util.Arrays;
import java.util.List;

@DataMongoTest  // load only mongo related conf
@RunWith(SpringRunner.class)
@DirtiesContext
public class ItemReactiveRepositoryTest {

    @Autowired
    ItemReactiveRepository itemReactiveRepository;

    List<Item> items = Arrays.asList(
            new Item(null, "Samsung TV", 400.0),
            new Item(null, "LG TV", 420.0),
            new Item(null, "Apple Watch", 299.99),
            new Item(null, "Beats Headphones", 149.99),
            new Item("ABC", "Boss Headphones", 149.99)
    );

    @BeforeEach
    public void setUp() {
        itemReactiveRepository
                .deleteAll()
                .thenMany(Flux.fromIterable(items))
                .flatMap(itemReactiveRepository::save)
                .doOnNext((item -> {
                    System.out.println("Inserted Item is :" + item);
                }))
                .blockLast()
                ;
    }

    @Test
    public void getAllItems() {

        StepVerifier
                .create(itemReactiveRepository.findAll())
                .expectSubscription()
                .expectNextCount(5)
                .verifyComplete()
                ;
    }

    @Test
    public void getItemById() {
        StepVerifier
                .create(itemReactiveRepository.findById("ABC"))
                .expectSubscription()
                .expectNextMatches((item -> item.getDescription().equals("Boss Headphones")))
                .verifyComplete()
                ;
    }

    @Test
    public void getItemByDescription() {
        StepVerifier
                .create(itemReactiveRepository.findByDescription("Apple Watch").log())
                .expectSubscription()
                .expectNextMatches((item -> item.getPrice() == 299.99))
                .verifyComplete()
                ;
    }

    @Test
    public void saveItem() {

        Item item = new Item(null, "Google Home Mini", 30.00);
        Mono<Item> monoItem = itemReactiveRepository.save(item);
        StepVerifier
                .create(monoItem.log("saveItem : "))
                .expectSubscription()
                .expectNextMatches(newItem -> (newItem.getId() != null) && newItem.getDescription().equals("Google Home Mini"))
                .verifyComplete()
                ;
    }

    @Test
    public void updateItem() {

        double newPrice = 520.00;

        Flux<Item> updatedItem = itemReactiveRepository
                .findByDescription("LG TV")
                .map(item -> {
                    item.setPrice(newPrice);
                    return item;
                })
                .flatMap(itemReactiveRepository::save)
                ;

        StepVerifier
                .create(updatedItem)
                .expectSubscription()
                .expectNextMatches(item -> item.getPrice() == newPrice)
                .verifyComplete()
                ;
    }

    @Test
    public void deleteItemById() {
        Mono<Void> deletedItem = itemReactiveRepository
                .findById("ABC")
                .map(Item::getId)
                .flatMap(id -> {
                    return itemReactiveRepository.deleteById(id);
                })
                ;

        StepVerifier
                .create(deletedItem)
                .expectSubscription()
                .verifyComplete()
                ;

        StepVerifier
                .create(itemReactiveRepository.findAll())
                .expectSubscription()
                .expectNextCount(4)
                .verifyComplete()
                ;
    }
}
