package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.DiscountPolicy;
import com.fastcampus.faststore.repository.DiscountPolicyRepository;
import com.fastcampus.faststore.type.DiscountType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class DiscountPolicyServiceTest {

    @Autowired
    private DiscountPolicyRepository discountPolicyRepository;

    private DiscountPolicyService discountPolicyService;

    @BeforeEach
    public void setup() {
        discountPolicyService = new DiscountPolicyService(discountPolicyRepository);
    }

    @AfterEach
    public void tearDown() {
        discountPolicyRepository.deleteAll();
    }

    @Test
    public void registerDiscountPolicy() {
        discountPolicyService.registerDiscountPolicy(DiscountType.PERCENT, 10L);

        assertThat(discountPolicyRepository.count()).isEqualTo(1L);
        DiscountPolicy result = discountPolicyRepository.findAll().get(0);
        assertThat(result.getDiscountType()).isEqualTo(DiscountType.PERCENT);
        assertThat(result.getAmount()).isEqualTo(10L);
    }
}
