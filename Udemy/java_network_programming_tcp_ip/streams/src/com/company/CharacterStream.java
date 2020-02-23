package com.company;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class CharacterStream {
    public static void main(String[] args) {
        try {
            OutputStreamWriter out = new OutputStreamWriter(new FileOutputStream("example4.txt"));
            InputStreamReader in = new InputStreamReader(new FileInputStream("example4.txt"));

            System.out.println(out.getEncoding());

            out.write("Hello CharacterStream");
//            out.flush();

            out.close();

            int data = in.read();
            while(data != -1) {
                System.out.print((char)data);
                data = in.read();
            }
            in.close();
        } catch (Exception e) {
            System.err.println(e.toString());
        }
    }
}
