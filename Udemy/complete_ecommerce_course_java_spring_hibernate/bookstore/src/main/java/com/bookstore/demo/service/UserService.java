package com.bookstore.demo.service;

import com.bookstore.demo.domain.User;
import com.bookstore.demo.domain.security.PasswordResetToken;
import sun.security.util.Password;

public interface UserService {
    PasswordResetToken getPasswordResetToken(final String token);

    void createPasswordResetTokenForUser(final User user, final String token);
}
