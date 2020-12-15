package com.adminportal.adminportal.repository;

import com.adminportal.adminportal.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
