package com.oreilly.reactiveofficer.dao;

import com.oreilly.reactiveofficer.entities.Officer;
import com.oreilly.reactiveofficer.entities.Rank;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface OfficerRepository extends ReactiveMongoRepository<Officer, String> {
    Flux<Officer> findByRank(Rank rank);
    Flux<Officer> findByLast(String last);
}
