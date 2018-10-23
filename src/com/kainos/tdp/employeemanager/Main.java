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
		while(true){
			do {
				menu.printMenu();
				userInput = sc.nextInt();
				validChoice = menu.checkUserChoiceValid(userInput);
			} while(!validChoice);
			
			switch (userInput) {
				case 1 : 
					menu.addEmployee();
					break;
				case 2 : 
					menu.viewEmployee();
					break;
			}
		}
	}
}