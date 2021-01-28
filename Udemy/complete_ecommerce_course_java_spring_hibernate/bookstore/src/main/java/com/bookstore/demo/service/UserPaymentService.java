package com.bookstore.demo.service;

import com.bookstore.demo.domain.UserPayment;

import java.util.Optional;

public interface UserPaymentService {
    Optional<UserPayment> findById(Long id);

    void removeById(Long id);
}
