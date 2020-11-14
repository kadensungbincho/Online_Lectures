package com.example.study.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum OrderType {

    ALL(0, "grouped", "grouped send"),
    EACH(1, "each", "each send")
    ;

    private Integer id;
    private String title;
    private String description;
}
