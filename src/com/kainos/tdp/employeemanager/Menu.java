package com.kainos.tdp.employeemanager;

public class Menu {
	
	public void printMenu() {
		System.out.println("******************************");
		System.out.println("       Welcome to the         ");
		System.out.println("     Employee Management      ");
		System.out.println("           System             \n");
		System.out.println(" 1. Insert a New Employee     \n");
		System.out.println(" 2. View Employee Details     \n");
		System.out.println("******************************");
	}
	
	public boolean handleUserChoice(int userInput) {
		if(userInput < 1 || userInput > 2) {
			System.out.println("Invalid choice, please pick again!");
			return false;
		} else {
			return true;
		}
	}
}
