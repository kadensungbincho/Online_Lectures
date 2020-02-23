package com.company;

import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;

public class InetAddressExample {
    public static void main(String[] args) {
        try {
            InetAddress address = InetAddress.getLocalHost();
            System.out.println(address.getHostAddress());
            System.out.println(address.getHostName());
            InetAddress address2 = InetAddress.getByName("google.com");
            System.out.println(address2.getHostAddress());
            System.out.println(address2.getHostName());
            Socket socket = new Socket(address, 9090);
        } catch(IOException e) {
            System.out.println(e.toString());
        }
    }
}
