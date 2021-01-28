package com.kadensungbincho.unittesting.unittesting.controller;

import com.kadensungbincho.unittesting.unittesting.business.ItemBusinessService;
import com.kadensungbincho.unittesting.unittesting.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.GeneratedValue;
import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemBusinessService businessService;

    @GetMapping("/dummy-item")
    public Item dummyItem() {
        return new Item(1, "Ball", 10, 100);
    }

    @GetMapping("/item-from-business-service")
    public Item itemFromBusinessService() {
        return businessService.retrieveHardcodedItem();
    }

    @GetMapping("/all-items-from-database")
    public List<Item> allItemsFromDatabase() {
        return businessService.retrieveAllItems();
    }
}
