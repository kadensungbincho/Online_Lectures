package com.example.study.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ItemStatus {

    REGISTERED(0, "registered", "item registered"),
    UNREGISTERED(1, "unregistered", "item unregistered"),
    WAITING(2, "waiting", "item waiting")
    ;

    private Integer id;
    private String title;
    private String description;
}
