package com.adminportal.adminportal.controller;

import com.adminportal.adminportal.domain.Book;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/book")
public class BookController {

    @RequestMapping("/add")
    public String addBook(Model model) {
        Book book = new Book();
        model.addAttribute("book", book);
        return "addBook";
    }
}
