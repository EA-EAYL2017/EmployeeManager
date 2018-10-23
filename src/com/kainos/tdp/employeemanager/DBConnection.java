package com.kainos.tdp.employeemanager;

import java.sql.*;
import java.util.ArrayList;

public class DBConnection {
	protected static String user = System.getenv("DB_USER");
	protected static String password = System.getenv("DB_PASS");
	
	protected Connection createConnection() {
		try {
			Class driver = Class.forName("com.mysql.jdbc.Driver");
			Connection c = DriverManager.getConnection("jdbc:mysql://localhost/EmployeeManager?useSSL=false", user, password);
			return c;
		} catch(SQLException | ClassNotFoundException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public void createUser(Employee user) {
		Connection currentConnection = createConnection();
		if(currentConnection == null) {
			System.out.println("Unexpected error on Database connection");
		}
		try {
			Statement createStatement = currentConnection.createStatement();
			
			String statement = String.format("INSERT INTO Employees (name, address, national_insurance, bic_iban, salary, department) VALUES ('%s', '%s', '%s', '%s', '%.2f', '%s');" , user.getName(), user.getAddress(), user.getNationalInsuranceNo(), user.getIBAN(), user.getStartingSalary(), user.getDepartment());
			createStatement.execute(statement);
		} catch(SQLException e) {
			System.out.println(e.getMessage());
		}
	}
	
	public Employee searchById(int id) {
		Connection currentConnection = createConnection();
		if(currentConnection == null) {
			System.out.println("Unexpected error on Database connection");
		}
		try {
			Statement search = currentConnection.createStatement();
			
			String statement = String.format("SELECT * FROM Employees WHERE id = %d", id);
			
			ResultSet userInfo = search.executeQuery(statement);
			
			return new Employee(userInfo.getString("name"), userInfo.getString("address"), userInfo.getString("national_insurance"), userInfo.getString("bic_iban"), userInfo.getFloat("salary"), userInfo.getString("department"));
		} catch(SQLException e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public ArrayList<Employee> departmentReport(String department) {
		Connection currentConnection = createConnection();
		if(currentConnection == null) {
			System.out.println("Unexpected error on Database connection");
		}
		try {
			Statement search = currentConnection.createStatement();
			
			String statement = String.format("SELECT * FROM Employees WHERE department = '%s'", department);
			
			ResultSet results = search.executeQuery(statement);
			ArrayList<Employee> reportResults = new ArrayList<Employee>();
			while(results.next()) {
				reportResults.add(new Employee(results.getString("name"), results.getString("address"), results.getString("national_insurance"), results.getString("bic_iban"), results.getFloat("salary"), results.getString("department")));
			}
			
			return reportResults;
		} catch (SQLException e){
			System.out.println(e.getMessage());
			return null;
		}
		
	}
}