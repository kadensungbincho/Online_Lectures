package com.kadensungbincho.unittesting.unittesting.data;

import com.kadensungbincho.unittesting.unittesting.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
