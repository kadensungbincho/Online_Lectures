package com.kadensungbincho.unittesting.unittesting.business;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BusinessTest {

    @Test
    public void calculateSum_basic() {
        BusinessImpl business = new BusinessImpl();
        int result = business.calculateSum(new int[] { 1, 2, 3});
        int expect = 6;

        assertEquals(result, expect);
    }


}
