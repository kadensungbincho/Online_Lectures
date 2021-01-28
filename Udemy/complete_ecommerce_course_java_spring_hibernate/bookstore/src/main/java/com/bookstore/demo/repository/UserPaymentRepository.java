package com.bookstore.demo.repository;

import com.bookstore.demo.domain.UserPayment;
import org.springframework.data.repository.CrudRepository;

public interface UserPaymentRepository extends CrudRepository<UserPayment, Long> {
}
