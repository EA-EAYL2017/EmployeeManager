package com.kainos.tdp.employeemanager;
import java.util.Scanner;

public class Menu {
	public Scanner sc = new Scanner(System.in);
	
	public void printMenu() {
		System.out.println("******************************");
		System.out.println("       Welcome to the         ");
		System.out.println("     Employee Management      ");
		System.out.println("           System             \n");
		System.out.println(" 1. Insert a New Employee     \n");
		System.out.println(" 2. View Employee Details     \n");
		System.out.println("******************************");
	}
	
	public boolean checkUserChoiceValid(int userInput) {
		if(userInput < 1 || userInput > 2) {
			System.out.println("Invalid choice, please pick again!");
			return false;
		} else {
			return true;
		}
	}
	
	public void addEmployee() {
		String name = inputName();
		String address = inputAddress();
		String niNumber = inputNINumber();
		String IBAN = inputIBAN();
		String employeeNo = inputEmployeeNo();
		float startingSalary = inputStartingSalary();
	}

	private String inputName() {
		System.out.println("\nPlease Enter Employee Name : ");
		return sc.nextLine();
	}

	private String inputAddress() {
		System.out.println("\nPlease Enter Address : ");
		return sc.nextLine();
	}

	private String inputNINumber() {
		System.out.println("\nPlease Enter NI Number : ");
		return sc.nextLine();
	}
	
	private String inputIBAN() {
		System.out.println("\nPlease Enter IBAN : ");
		return sc.nextLine();
	}
	
	private String inputEmployeeNo() {
		System.out.println("\nPlease Enter Employee Number : ");
		return sc.nextLine();
	}
	
	private float inputStartingSalary() {
		System.out.println("\nPlease Enter Starting Salary : ");
		return sc.nextFloat();
	}
	
}
