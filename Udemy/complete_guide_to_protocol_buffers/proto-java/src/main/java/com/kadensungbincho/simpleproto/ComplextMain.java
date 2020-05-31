package com.kadensungbincho.simpleproto;

import example.complex.Complex.*;

public class ComplextMain {
    public static void main(String[] args) {
        DummyMessage dummyMessage1 = newDummyMessage(10, "kaden");

        ComplexMessage.Builder builder = ComplexMessage.newBuilder();
        builder.setOneDummy(dummyMessage1);

        builder.addMultipleDummy(newDummyMessage(60, "sungbinn"));

    }

    public static DummyMessage newDummyMessage(Integer id, String name) {
        DummyMessage.Builder dummyMessageBuilder = DummyMessage.newBuilder();

        DummyMessage message = dummyMessageBuilder.setName("Dummy")
                .setId(35)
                .build();
        return message;
    }
}
