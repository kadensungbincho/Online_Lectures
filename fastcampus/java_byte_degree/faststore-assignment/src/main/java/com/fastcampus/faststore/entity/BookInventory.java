package com.fastcampus.faststore.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
/**
 * 책 재고 Entity
 * 책, 갯수, 총 수익을 가진다
 * 빈 재고는 책과 0개라는 count, 0원의 income을 가진다
 */
public class BookInventory extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    private Book book;

    private Long count;

    private Long income;

    public static BookInventory empty(Book book) {
        return new BookInventory(book, 0L, 0L);
    }

    public void addBook(BookSale bookSale) {
        this.book = bookSale.getBook();
        this.count++;
        this.income += bookSale.getPrice();
    }

    public void minusBook(BookSale bookSale) {
        if (count == 0) {
            throw new RuntimeException("재고가 없으므로 책을 판매할 수 없습니다.");
        }
        this.book = bookSale.getBook();
        this.count--;
        this.income -= bookSale.getPrice();
    }
}
