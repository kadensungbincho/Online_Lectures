package com.fastcampus.faststore.repository;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.entity.BookInventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookInventoryRepository extends JpaRepository<BookInventory, Long> {
    Optional<BookInventory> findByBook(Book book);
}
