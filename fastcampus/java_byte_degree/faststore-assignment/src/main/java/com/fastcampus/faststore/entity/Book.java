package com.fastcampus.faststore.entity;

import lombok.*;
import lombok.experimental.Accessors;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Accessors(chain = true)
/**
 * 책 Entity
 * 책의 정보인 제목, 저자, 가격을 가진다
 */
public class Book extends BaseEntity {
    private String title;

    private String author;

    private Long price;
}
