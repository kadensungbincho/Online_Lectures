package com.company;

import java.io.FileOutputStream;

public class OutStreams {
    public static void main(String[] args) {
        try {
            FileOutputStream fileOutput = new FileOutputStream("example2.txt");

            char H = 'H';

            fileOutput.write(H);

            String string = "Hello Java Network Programming!";

            fileOutput.write(string.getBytes());

            fileOutput.close();
        } catch(Exception e) {
            System.out.println(e.toString());
        }
    }
}
