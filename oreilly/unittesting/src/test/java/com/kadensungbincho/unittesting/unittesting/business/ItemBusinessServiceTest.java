package com.kadensungbincho.unittesting.unittesting.business;

import com.kadensungbincho.unittesting.unittesting.data.ItemRepository;
import com.kadensungbincho.unittesting.unittesting.model.Item;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ItemBusinessServiceTest {

    @InjectMocks
    private ItemBusinessService businessService;

    @Mock
    private ItemRepository itemRepository;

    @Test
    public void retrieveAllItems_basic() {
        when(itemRepository.findAll()).thenReturn(Arrays.asList(
                new Item(2, "Item2", 10, 10),
                new Item(3, "Item3", 20, 10)
        ));

        List<Item> items = businessService.retrieveAllItems();
        assertEquals(items.get(0).getValue(), 100);
        assertEquals(items.get(1).getValue(), 200);
    }

}
