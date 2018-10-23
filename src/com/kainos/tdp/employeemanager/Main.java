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
			validChoice = handleUserChoice(userInput);
		}while(!validChoice);
	}

	private static boolean handleUserChoice(int userInput) {
		if(userInput < 1 || userInput > 2) {
			System.out.println("Invalid choice, please pick again!");
			return false;
		} else {
			return true;
		}
	}
	
	
}