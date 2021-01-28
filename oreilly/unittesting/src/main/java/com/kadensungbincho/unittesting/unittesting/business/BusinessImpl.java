package com.kadensungbincho.unittesting.unittesting.business;

import com.kadensungbincho.unittesting.unittesting.data.DataService;

import java.util.Arrays;
import java.util.OptionalInt;

public class BusinessImpl {

    private DataService dataService;

    public void setDataService(DataService dataService) {
        this.dataService = dataService;
    }

    public int calculateSum(int[] data) {
        return Arrays.stream(data).reduce(Integer::sum).orElse(0);
    }

    public int calculateSumUsingDataService() {
        int sum = 0;
        int[] data = dataService.retrieveAllData();

        for (int value : data) {
            sum += value;
        }

        return sum;
    }
}
