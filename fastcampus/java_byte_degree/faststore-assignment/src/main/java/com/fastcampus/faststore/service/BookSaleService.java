package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.entity.BookSale;
import com.fastcampus.faststore.entity.DiscountPolicy;
import com.fastcampus.faststore.repository.BookSaleRepository;
import com.fastcampus.faststore.type.DiscountType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BookSaleService {
    private final BookService bookService;
    private final DiscountPolicyService discountPolicyService;
    private final BookSaleRepository bookSaleRepository;

    @Transactional(readOnly = true)
    public BookSale getOrThrow(Book book) {
        return bookSaleRepository.findByBook(book)
                .orElseThrow(() -> new RuntimeException("해당 책의 판매가 존재하지 않습니다."));
    }

    @Transactional
    public void registerBookSale(String title, DiscountType discountType, Long discountAmount) {
        Book book = bookService.getOrThrow(title);
        DiscountPolicy policy = discountPolicyService.registerDiscountPolicy(discountType, discountAmount);
        BookSale bookSale = new BookSale(book, policy);
        bookSaleRepository.save(bookSale);
    }
}
