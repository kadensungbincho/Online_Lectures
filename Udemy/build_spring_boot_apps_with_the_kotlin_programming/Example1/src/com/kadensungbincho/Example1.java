package com.kadensungbincho;

import javafx.application.Application;
import javafx.stage.Stage;

import java.util.Calendar;

public class Example1 extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
    JavaPerson person = new JavaPerson(1L, "Data Engineer", "Kaden", "Cho", null);
    }
}
