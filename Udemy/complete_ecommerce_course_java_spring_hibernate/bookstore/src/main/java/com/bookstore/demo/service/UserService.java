package com.bookstore.demo.service;

import com.bookstore.demo.domain.User;
import com.bookstore.demo.domain.UserBilling;
import com.bookstore.demo.domain.UserPayment;
import com.bookstore.demo.domain.security.PasswordResetToken;
import com.bookstore.demo.domain.security.UserRole;

import java.util.Set;

public interface UserService {
    PasswordResetToken getPasswordResetToken(final String token);

    void createPasswordResetTokenForUser(final User user, final String token);

    User findByUsername(String username);

    User findByEmail(String email);

    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    User save(User user);

    void updateUserBilling(UserBilling userBilling, UserPayment userPayment, User user);

    void setDefaultPaymentId(Long defaultUserPaymentId, User user);
}
