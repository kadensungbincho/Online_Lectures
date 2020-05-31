package com.kadensungbincho.simpleproto;

import example.simple.Simple;

public class ProtoToJsonMain {

    public static void main(String[] args) {
        Simple.SimpleMessage.Builder builder = Simple.SimpleMessage.newBuilder();

        builder.setId(42);
        builder.setIsSimple(true);
        builder.setName("My Simple Message Name");

        builder.setId(42)
                .setIsSimple(true)
                .setName("My Simple name");

        // print this as a JSON
        JsonFormat
    }
}
