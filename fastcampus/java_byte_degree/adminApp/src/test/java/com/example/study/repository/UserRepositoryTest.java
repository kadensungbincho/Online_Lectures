package com.example.study.repository;

import com.example.study.StudyApplicationTests;
import com.example.study.model.entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

public class UserRepositoryTest extends StudyApplicationTests {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void create() {
        String account = "Test02";
        String password = "Test02";
        String status = "REGISTERED";
        String email = "test01@gamail.com";
        String phoneNumber = "010-1111-2221";
        LocalDateTime registeredAt = LocalDateTime.now();

        User user = User.builder()
            .account(account)
            .password(password)
            .status(status)
            .email(email)
            .phoneNumber(phoneNumber)
            .registeredAt(registeredAt)
            .build();

        User newUser = userRepository.save(user);
        Assertions.assertNotNull(newUser);
    }

    @Test
    @Transactional
    public void read() {
        User user = userRepository.findFirstByPhoneNumberOrderByIdDesc("010-1111-2222");

        System.out.println("----------ORDER GROUP----------");
        user.getOrderGroupList().stream().forEach(orderGroup -> {
            System.out.println(orderGroup.getTotalPrice());
            System.out.println(orderGroup.getTotalQuantity());
            System.out.println(orderGroup.getRevAddress());

            System.out.println("----------ORDER DETAIL----------");
            orderGroup.getOrderDetailList().forEach(orderDetail -> {
                System.out.println(orderDetail.getStatus());
                System.out.println(orderDetail.getArrivalDate());

                System.out.println("----------Item ----------");
                orderDetail.getItem().getName();
            });

        });

        Assertions.assertNotNull(user);
    }

    @Test
    @Transactional
    public void update() {
        Optional<User> user = userRepository.findById(1L);

        user.ifPresent(selectedUser -> {
            selectedUser.setAccount("PPPP");
            selectedUser.setUpdatedAt(LocalDateTime.now());
            selectedUser.setUpdatedBy("update method()");

            userRepository.save(selectedUser);
        });
    }

    @Test
    @Transactional
    public void delete() {
        Optional<User> user = userRepository.findById(2L);

        Assertions.assertTrue(user.isPresent());

        user.ifPresent(selectedUser -> {
            userRepository.delete(selectedUser);
        });

        Optional<User> deletedUser = userRepository.findById(2L);

        Assertions.assertFalse(deletedUser.isPresent());
    }
}
