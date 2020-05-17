package com.demo.hazelcast;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@org.springframework.stereotype.Service
@Transactional
public class Service {

    @Autowired
    CustomerRepository repository;

    @PersistenceContext
    EntityManager em;

    public List<Customer> findAll(Pageable pageable) {
        List<Customer> customers = repository.findAll(pageable);
        em.flush();
        em.clear();
        return customers;
    }

    public int findCount() {
        return repository.findCount();
    }

    public Customer getCustomerById(Long id) {
        return repository.findOne(id);
    }
}
