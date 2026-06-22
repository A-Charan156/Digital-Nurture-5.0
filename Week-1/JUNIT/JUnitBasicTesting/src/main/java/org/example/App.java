package org.example;

public class App {

    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        App calculator = new App();
        int sum = calculator.add(10, 25);
        System.out.println("10 + 25 = " + sum);
    }
}
