package com.oreilly.demo.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.ui.Model;
import org.springframework.validation.support.BindingAwareConcurrentModel;

import static org.junit.jupiter.api.Assertions.*;

public class HelloControllerUnitTest {
    @Test
    public void sayHello() {
        HelloController controller = new HelloController();
        Model model = new BindingAwareConcurrentModel();
        String result = controller.sayHello("world", model);

        assertEquals("hello", result);
        assertEquals("world", model.asMap().get("user"));
    }
}
