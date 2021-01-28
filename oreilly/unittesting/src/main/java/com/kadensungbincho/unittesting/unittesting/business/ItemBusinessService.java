package com.kadensungbincho.unittesting.unittesting.business;

import com.kadensungbincho.unittesting.unittesting.data.ItemRepository;
import com.kadensungbincho.unittesting.unittesting.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemBusinessService {

    @Autowired
    private ItemRepository itemRepository;

    public Item retrieveHardcodedItem() {
        return new Item(1, "Ball", 10, 100);
    }

    public List<Item> retrieveAllItems() {
        List<Item> items = itemRepository.findAll();
        for (Item item : items) {
            item.setValue(item.getPrice() * item.getQuantity());
        }

        return items;
    }
}
