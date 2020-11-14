package com.example.study.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserStatus {

    REGISTERED(0,"registered","user registered"),
    UNREGISTERED(1, "unregistered", "user unregistered")
    ;

    private Integer id;
    private String title;
    private String description;
}
