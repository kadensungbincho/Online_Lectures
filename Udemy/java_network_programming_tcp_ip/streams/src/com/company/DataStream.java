package com.company;

import java.io.*;

public class DataStream {
    public static void main(String[] args) {
        File file = new File("example3.txt");

        if(file.exists()) {
            System.out.println("File already exists! " + file.getName());
        } else {
            try {
                if(file.createNewFile()) {
                    System.out.println("File was created");
                    System.out.println("File path: " + file.getAbsolutePath());
                } else {
                    System.out.println("Cannot create file");
                }
            } catch (Exception e) {
                System.out.println(e.toString());
            }
        }

        try {
            DataOutputStream out = new DataOutputStream(new FileOutputStream(file.getName()));
            DataInputStream in = new DataInputStream(new FileInputStream(file.getName()));

            out.writeInt(72);
            out.writeDouble(678.00);
            out.writeFloat(123.45F);

            out.close();

            int var1 = in.readInt();
            double var2 = in.readDouble();
            float var3 = in.readFloat();

            System.out.println(var1);
            System.out.println(var2);
            System.out.println(var3);

            in.close();
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}
