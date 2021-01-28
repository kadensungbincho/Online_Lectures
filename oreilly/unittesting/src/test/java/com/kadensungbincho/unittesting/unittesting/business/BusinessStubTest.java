package com.kadensungbincho.unittesting.unittesting.business;

import com.kadensungbincho.unittesting.unittesting.data.DataService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DataServiceStub implements DataService {
    @Override
    public int[] retrieveAllData() {
        return new int[] { 1, 2, 3 };
    }
}

public class BusinessStubTest {

    @Test
    public void calculateSumUsingDataService_basic() {
        BusinessImpl business = new BusinessImpl();
        business.setDataService(new DataServiceStub());
        int result = business.calculateSumUsingDataService();
        int expect = 6;

        assertEquals(result, expect);
    }


}
