package com.bookstore.demo.service.impl;

import com.bookstore.demo.domain.UserPayment;
import com.bookstore.demo.repository.UserPaymentRepository;
import com.bookstore.demo.service.UserPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPaymentServiceImpl implements UserPaymentService {

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Override
    public Optional<UserPayment> findById(Long id) {
        return userPaymentRepository.findById(id);
    }

    public void removeById(Long id) {
        userPaymentRepository.deleteById(id);
    }
}
