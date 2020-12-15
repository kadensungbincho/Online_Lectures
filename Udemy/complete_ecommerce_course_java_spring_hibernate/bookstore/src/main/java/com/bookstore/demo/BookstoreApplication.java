package com.bookstore.demo;

import com.bookstore.demo.domain.User;
import com.bookstore.demo.domain.security.Role;
import com.bookstore.demo.domain.security.UserRole;
import com.bookstore.demo.service.UserService;
import com.bookstore.demo.utility.SecurityUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BookstoreApplication implements CommandLineRunner {

    @Autowired
    private UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(BookstoreApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        User user1 = new User();
        user1.setFirstName("John");
        user1.setLastName("Adams");
        user1.setUsername("j");
        user1.setPassword(SecurityUtility.passwordEncoder().encode("p"));
        user1.setEmail("JAdams@gmail.com");
        Set<UserRole> userRoles = new HashSet<>();
        Role role1 = new Role();
        role1.setRoleId(1);
        role1.setName("ROLE_USER");
        userRoles.add(new UserRole(user1, role1));

        try {
            userService.createUser(user1, userRoles);
        } catch (Exception e) {
            System.out.println("User already exists");
        }

    }
}
