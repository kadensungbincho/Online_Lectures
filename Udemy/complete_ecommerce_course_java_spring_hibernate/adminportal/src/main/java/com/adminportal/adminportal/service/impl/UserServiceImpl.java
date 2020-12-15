package com.adminportal.adminportal.service.impl;

import com.adminportal.adminportal.domain.User;
import com.adminportal.adminportal.domain.security.UserRole;
import com.adminportal.adminportal.repository.RoleRepository;
import com.adminportal.adminportal.repository.UserRepository;
import com.adminportal.adminportal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User localUser = userRepository.findByUsername(user.getUsername());

        if(localUser != null) {
            throw new Exception("user already exists. Nothing will be done");
        }

        for (UserRole ur: userRoles) {
            roleRepository.save(ur.getRole());
        }

        user.getUserRoles().addAll(userRoles);

        localUser = userRepository.save(user);

        return localUser;
    }
}
