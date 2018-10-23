package com.kainos.tdp.employeemanager;

import java.sql.*;

public class DBConnection {
	protected static String url;
	protected static String user;
	protected static String password;
	
	public Connection createConnection() {
		try {
			Class driver = Class.forName("com.mysql.jdbc.Driver");
			Connection c = DriverManager.getConnection(url, user, password);
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
	
	
}
