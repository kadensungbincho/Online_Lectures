package com.example.study.controller;

import com.example.study.model.SearchParam;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PostController {

    @PostMapping("/postMethod")
    public SearchParam postMethod(@RequestBody SearchParam searchParam) {


        return searchParam;
    }

}
