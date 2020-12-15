package com.adminportal.adminportal.service;


import com.adminportal.adminportal.domain.User;
import com.adminportal.adminportal.domain.security.UserRole;

import java.util.Set;

public interface UserService {
    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    User save(User user);
}
