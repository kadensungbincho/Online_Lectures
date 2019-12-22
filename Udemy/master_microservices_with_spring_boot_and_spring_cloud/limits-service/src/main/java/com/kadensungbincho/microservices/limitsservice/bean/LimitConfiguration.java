package com.kadensungbincho.microservices.limitsservice.bean;

public class LimitConfiguration {
    private int maximum;
    private int minimum;

    protected LimitConfiguration() {

    }

    public LimitConfiguration(int maximum, int minimum) {
        this.maximum = maximum;
        this.minimum = minimum;
    }

    public int getMaximum() {
        return maximum;
    }

    public int getMinimum() {
        return minimum;
    }
}
