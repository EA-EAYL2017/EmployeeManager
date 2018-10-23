package com.kainos.tdp.employeemanager;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		runMenu();
	}
	
	private static void runMenu() {
		int userInput;
		Scanner sc = new Scanner(System.in);
		Menu menu = new Menu();
		boolean validChoice;
		
		do {
			menu.printMenu();
			userInput = sc.nextInt();
			handleUserChoice(userInput);
		}while(!validChoice);
	}
	
	
}