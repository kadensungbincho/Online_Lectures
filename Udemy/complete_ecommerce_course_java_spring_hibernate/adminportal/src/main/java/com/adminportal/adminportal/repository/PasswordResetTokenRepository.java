package com.adminportal.adminportal.repository;

import com.adminportal.adminportal.domain.security.PasswordResetToken;
import org.springframework.data.repository.CrudRepository;

public interface PasswordResetTokenRepository extends CrudRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
}
