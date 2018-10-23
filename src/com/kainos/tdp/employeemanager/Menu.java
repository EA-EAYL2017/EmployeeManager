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
		System.out.println(" 3. Exit System               \n");
		System.out.println("******************************");
	}
	
	public boolean checkUserChoiceValid(int userInput) {
		if(userInput < 1 || userInput > 3) {
			System.out.println("Invalid choice, please pick again!");
			return false;
		} else if(userInput == 3) {
			System.exit(0);
		} else {
			return true;
		}
		return false;
	}
	
	public void addEmployee() {
		String name = inputName();
		String address = inputAddress();
		String niNumber = inputNINumber();
		String IBAN = inputIBAN();
		float startingSalary = inputStartingSalary();
		
		Employee emp = new Employee(name, address, niNumber, IBAN, startingSalary);
		
		boolean valid = verifyDetails(emp);
		
		if(valid) {
			DBConnection db = new DBConnection();
			db.createUser(emp);
		} else {
			emp.setName(inputName());
			emp.setAddress(inputAddress());
			emp.setNationalInsuranceNo(inputNINumber());
			emp.setIBAN(inputIBAN());
			emp.setStartingSalary(inputStartingSalary());
		}
	}
	
	public void viewEmployee() {
		System.out.println("Enter the Employee ID : ");
		int id = sc.nextInt();
		if(id > 0) {
			DBConnection db = new DBConnection();
			db.searchById(id);
		} else {
			System.out.println("User ID Must Be Positive");
		}
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
	
	private float inputStartingSalary() {
		System.out.println("\nPlease Enter Starting Salary : ");
		return sc.nextFloat();
	}
	
	private boolean verifyDetails(Employee emp) {
		emp.toString();
		System.out.println("\nAre these details correct? (Yes/No)");
		String correct = sc.nextLine();
		boolean valid = false;
		do {
			switch (correct.toLowerCase()) {
				case "yes":
					return true;
				case "no":
					return false;
				default:
					System.out.println("Sorry I didn't get that, please try again.");
			}
		} while(!valid);
		return valid;
	}
}