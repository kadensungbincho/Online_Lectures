package com.fastcampus.faststore.entity;

import com.fastcampus.faststore.type.DiscountType;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BookSaleTest {

    @Test
    public void getPrice() {
        Book book = new Book("자바의 정석", "남궁성", 30000L);
        DiscountPolicy discountPolicy = new DiscountPolicy(DiscountType.PERCENT, 10L);
        BookSale bookSale = new BookSale(book, discountPolicy);

        Long result = bookSale.getPrice();

        assertThat(result).isEqualTo(27000L);
    }
}
