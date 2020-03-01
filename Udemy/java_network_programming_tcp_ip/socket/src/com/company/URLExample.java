package com.company;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class URLExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://finance.yahoo.com/quote/ORCL?ltr=1");
            URLConnection myURL = url.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(myURL.getInputStream()));
            String inputLine;
            while((inputLine = in.readLine()) != null) {
                System.out.println(inputLine);
            }
        } catch(MalformedURLException e) {
            System.out.println(e.toString());
        } catch(IOException e1) {
            System.out.println(e1.toString());
        }

    }
}
