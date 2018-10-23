package com.kainos.tdp.employeemanager;

import java.sql.*;

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
			
			String statement = String.format("INSERT INTO Employees, VALUES ('" + "%s', '" + "%s', '" + "%s', '" + "%s', '%.2f);'" , user.getName(), user.getAddress(), user.getNationalInsuranceNo(), user.getIBAN(), user.getStartingSalary());
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
			
			return new Employee(userInfo.getString("name"), userInfo.getString("address"), userInfo.getString("national_insurance"), userInfo.getString("bic_iban"), userInfo.getFloat("salary"));
		} catch(SQLException e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
}