package com.bookstore.demo.controller;

import com.bookstore.demo.domain.User;
import com.bookstore.demo.domain.security.PasswordResetToken;
import com.bookstore.demo.domain.security.Role;
import com.bookstore.demo.domain.security.UserRole;
import com.bookstore.demo.service.impl.UserSecurityService;
import com.bookstore.demo.service.impl.UserServiceImpl;
import com.bookstore.demo.utility.MailConstructor;
import com.bookstore.demo.utility.SecurityUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Controller
public class HomeController {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private MailConstructor mailConstructor;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserSecurityService userSecurityService;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/login")
    public String login(Model model) {
        model.addAttribute("classActiveLogin", true);
        return "myAccount";
    }

    @RequestMapping(value = "/forgetPassword", method = RequestMethod.POST)
    public String forgetPassword(HttpServletRequest request, @ModelAttribute("email") String email,
                                 Model model) {
        model.addAttribute("classActiveForgetPassword", true);

        User user = userService.findByEmail(email);

        if (user == null) {
            model.addAttribute("emailNotExist", true);
            return "myAccount";
        }

        String password = SecurityUtility.randomPassword();

        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);

        userService.save(user);

        String token = UUID.randomUUID().toString();
        userService.createPasswordResetTokenForUser(user, token);

        String appUrl = "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();

        SimpleMailMessage newEmail = mailConstructor.constructResetTokenEmail(appUrl, token, user, password);

        mailSender.send(newEmail);

        model.addAttribute("forgetPasswordEmailSent", "true");

        return "myAccount";
    }

    @RequestMapping("/newUser")
    public String newUser(@RequestParam("token") String token, Model model) {
        PasswordResetToken passwordResetToken = userService.getPasswordResetToken(token);

        if (passwordResetToken == null) {
            String message = "Invalid Token.";
            model.addAttribute("message", message);
            return "redirect:badRequest";
        }
        User user = passwordResetToken.getUser();
        String username = user.getUsername();
        UserDetails userDetails = userSecurityService.loadUserByUsername(username);

        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(),
                userDetails.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        model.addAttribute("user", user);
        model.addAttribute("classActiveEdit", true);
        return "myProfile";
    }

    @RequestMapping(value = "/newUser", method = RequestMethod.POST)
    public String newUserPost(HttpServletRequest request, @ModelAttribute("email") String userEmail,
                              @ModelAttribute("newUsername") String newUsername,
                              Model model) throws Exception {
        model.addAttribute("classActiveNewAccount", true);
        model.addAttribute("email", userEmail);
        model.addAttribute("username", newUsername);

        if (userService.findByUsername(newUsername) != null) {
            model.addAttribute("userNameExists", true);
            return "myAccount";
        }

        if (userService.findByEmail(userEmail) != null) {
            model.addAttribute("emailExists", true);
            return "myAccount";
        }

        User user = new User();
        user.setUsername(newUsername);
        user.setEmail(userEmail);

        String password = SecurityUtility.randomPassword();

        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);

        Role role = new Role();
        role.setRoleId(1);
        role.setName("ROLE_USER");
        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(new UserRole(user, role));
        userService.createUser(user, userRoles);

        String token = UUID.randomUUID().toString();
        userService.createPasswordResetTokenForUser(user, token);

        String appUrl = "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();

        SimpleMailMessage email = mailConstructor.constructResetTokenEmail(appUrl, token, user, password);

        mailSender.send(email);

        model.addAttribute("emailSent", "true");

        return "myAccount";
    }

}
