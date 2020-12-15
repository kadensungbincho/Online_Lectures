package com.oreilly.restclient.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@ExtendWith(SpringExtension.class)
public class JokeServiceTest {

    private Logger logger = LoggerFactory.getLogger(JokeService.class);

    @Autowired
    private JokeService service;

    @Test
    void getJuke() {
        String joke = service.getJoke("Craig", "walls");
        logger.info(joke);
        assertTrue(joke.contains("Craig") || joke.contains("walls"));
    }
}
