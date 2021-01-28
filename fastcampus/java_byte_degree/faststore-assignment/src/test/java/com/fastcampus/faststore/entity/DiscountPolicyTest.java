package com.fastcampus.faststore.entity;

import com.fastcampus.faststore.type.DiscountType;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class DiscountPolicyTest {

    @Test
    public void getDiscountAmount_WhenPercent() {
        DiscountPolicy discountPolicy = new DiscountPolicy(DiscountType.PERCENT, 10L);

        assertThat(discountPolicy.getDiscountAmount(30000L)).isEqualTo(27000L);
    }

    @Test
    public void getDiscountAmount_WhenAmount() {
        DiscountPolicy discountPolicy = new DiscountPolicy(DiscountType.AMOUNT, 3000L);

        assertThat(discountPolicy.getDiscountAmount(30000L)).isEqualTo(27000L);
    }
}
