package com.adminportal.adminportal;

import com.adminportal.adminportal.domain.User;
import com.adminportal.adminportal.domain.security.Role;
import com.adminportal.adminportal.domain.security.UserRole;
import com.adminportal.adminportal.service.UserService;
import com.adminportal.adminportal.utility.SecurityUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class AdminportalApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(AdminportalApplication.class, args);
    }

    @Autowired
    private UserService userService;

    @Override
    public void run(String... args) throws Exception {
        User user1 = new User();
        user1.setFirstName("Cho");
        user1.setLastName("admin");
        user1.setUsername("admin");
        user1.setPassword(SecurityUtility.passwordEncoder().encode("admin"));
        user1.setEmail("admin@gmail.com");
        Set<UserRole> userRoles = new HashSet<>();
        Role role1 = new Role();
        role1.setRoleId(0);
        role1.setName("ROLE_ADMIN");
        userRoles.add(new UserRole(user1, role1));

        try {
            userService.createUser(user1, userRoles);
        } catch (Exception e) {
            System.out.println("User already exists");
        }
    }

}
