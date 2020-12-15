package com.bookstore.demo.utility;

import com.bookstore.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

@Component
public class MailConstructor {
    @Autowired
    private Environment env;

    public SimpleMailMessage constructResetTokenEmail(String contextPath,
                                                      String token, User user, String password) {
        String url = contextPath + "/newUser?token=" + token;
        String message = "\nPlease click on this link to verify your email and edit your personal information. Your password is " + password;
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(user.getEmail());
        email.setSubject("Kaden's Bookstore - New User");
        email.setText(url + message);
        email.setFrom(env.getProperty("support.email"));
        return email;

    }
}
