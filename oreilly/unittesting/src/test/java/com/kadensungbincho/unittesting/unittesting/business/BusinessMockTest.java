package com.kadensungbincho.unittesting.unittesting.business;

import com.kadensungbincho.unittesting.unittesting.data.DataService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class BusinessMockTest {

    @InjectMocks
    BusinessImpl business;

    @Mock
    DataService dataServiceMock;

    @Test
    public void calculateSum_basic() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 1, 2, 3});

        int result = business.calculateSum(new int[] { 1, 2, 3});
        int expect = 6;

        assertEquals(result, expect);
    }
}
