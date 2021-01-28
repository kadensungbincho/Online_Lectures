package com.bookstore.demo.service.impl;

import com.bookstore.demo.domain.User;
import com.bookstore.demo.domain.UserBilling;
import com.bookstore.demo.domain.UserPayment;
import com.bookstore.demo.domain.security.PasswordResetToken;
import com.bookstore.demo.domain.security.UserRole;
import com.bookstore.demo.repository.PasswordResetTokenRepository;
import com.bookstore.demo.repository.RoleRepository;
import com.bookstore.demo.repository.UserPaymentRepository;
import com.bookstore.demo.repository.UserRepository;
import com.bookstore.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Override
    public PasswordResetToken getPasswordResetToken(final String token) {
        return passwordResetTokenRepository.findByToken(token);
    }

    @Override
    public void createPasswordResetTokenForUser(final User user, final String token) {
        final PasswordResetToken myToken = new PasswordResetToken(token, user);
        passwordResetTokenRepository.save(myToken);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

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

    @Override
    public void setDefaultPaymentId(Long defaultUserPaymentId, User user) {
        List<UserPayment> userPaymentList = (List<UserPayment>) userPaymentRepository.findAll();

        for (UserPayment userPayment: userPaymentList) {
            userPayment.setDefaultPayment(userPayment.getId().equals(defaultUserPaymentId));
            userPaymentRepository.save(userPayment);
        }
    }

    @Override
    public void updateUserBilling(UserBilling userBilling, UserPayment userPayment, User user) {
        userPayment.setUser(user);
        userPayment.setUserBilling(userBilling);
        userPayment.setDefaultPayment(true);
        userBilling.setUserPayment(userPayment);
        user.getUserPaymentList().add(userPayment);
        save(user);
    }
}
