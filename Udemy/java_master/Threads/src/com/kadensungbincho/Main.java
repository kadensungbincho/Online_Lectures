package com.kadensungbincho;

import static com.kadensungbincho.ThreadColor.*;

public class Main {
    public static void main(String[] args) {
        System.out.println(ANSI_PURPLE + "Hello from the main thread");

        Thread anotherThread = new AnotherThread();
        anotherThread.setName("== Another Thread ==");

        anotherThread.start();

        new Thread() {
            public void run() {
                System.out.println(ANSI_GREEN + "Hello from the anonymous " +
                        "class" +
                        " " +
                        "thread");
            }
        }.start();

        Thread myRunnableThread = new Thread(new MyRunnable() {
            @Override
            public void run() {
                System.out.println(ANSI_RED + "Hello rom the anonymous " +
                        "class's implementation of run");
                try {
                    anotherThread.join(2000);
                    System.out.println(ANSI_RED + "AnotherThread terminated, " +
                            "so I'm running again");
                } catch(InterruptedException e) {
                    System.out.println(ANSI_RED + "I couldn't wait after all." +
                            " I was interrupted");
                }
            }
        });
        myRunnableThread.start();
//        anotherThread.interrupt();

        System.out.println(ANSI_PURPLE + "hello again from the main thread");
    }
}
