package com.fastcampus.faststore.repository;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.entity.BookSale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookSaleRepository extends JpaRepository<BookSale, Long> {
    Optional<BookSale> findByBook(Book book);
}
