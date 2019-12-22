package com.company;

import com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput;

import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        List<String> someBingoNumbers = Arrays.asList(
                "N40", "N36",
                "B12", "B6",
                "G53", "G40", "G60", "G50", "g64",
                "I26", "I17", "I29",
                "O71");

        List<String> gNumbers = new ArrayList<>();

//        someBingoNumbers.forEach(number -> {
//            if(number.toUpperCase().startsWith("G")) {
//                gNumbers.add(number);
////                System.out.println(number);
//            }
//        });
//
//        gNumbers.sort((s1, s2) -> s1.compareTo(s2));
//        gNumbers.forEach((String s) -> System.out.println(s));
        someBingoNumbers
                .stream()
                .map(String::toUpperCase) // s -> s.toUpperCase()
                .filter(s -> s.startsWith("G"))
                .sorted()
                .forEach(System.out::println);

        Stream<String> ioNumberStream = Stream.of("I26", "I29", "O71");
        Stream<String> inNumberStream = Stream.of("N40", "N36", "I17", "O71");
        Stream<String> concatStream = Stream.concat(ioNumberStream,
                inNumberStream);

        System.out.println(concatStream.distinct().peek(System.out::println).count());

        Employee john = new Employee("John Doe", 30);
        Employee jack = new Employee("Jack Ma", 25);
        Employee jane = new Employee("Jane Deer", 21);
        Employee snow = new Employee("Snow White", 20);

        Department hr = new Department("Human Resource");
        hr.addEmployee(jack);
        hr.addEmployee(jane);
        hr.addEmployee(john);

        Department accounting = new Department("Accounting");
        accounting.addEmployee(snow);

        List<Department> departments = new ArrayList<>();
        departments.add(hr);
        departments.add(accounting);

        departments.stream()
                .flatMap(department -> department.getEmployees().stream())
                .forEach(System.out::println);

        List<String> sortedQNumbers = someBingoNumbers
                .stream()
                .map(String::toUpperCase)
                .filter(s -> s.startsWith("G"))
                .sorted()
                .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
        // Collector.toList()

        for(String s: sortedQNumbers) {
            System.out.println(s);
        }

        Map<Integer, List<Employee>> groupedByAge = departments.stream()
                .flatMap(department -> department.getEmployees().stream())
                .collect(Collectors.groupingBy(employee -> employee.getAge()));

        departments.stream()
                .flatMap(department -> department.getEmployees().stream())
                .reduce((e1, e2) -> e1.getAge() < e2.getAge() ? e1 : e2)
                .ifPresent(System.out::println);

        Stream.of("ABC", "AC", "BAA", "CCCC", "XY", "ST")
                .filter(s -> {
                    System.out.println(s);
                    return s.length() == 3;
                }) // Stream is a terminal operation, without count it
                // doesn't println
                .count();
    }
}
