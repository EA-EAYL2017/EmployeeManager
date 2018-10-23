package com.kainos.tdp.employeemanager.Test;

import com.kainos.tdp.employeemanager.*;

public class testdbConnection {
	public static void main(String[] args) {
		DBConnection test = new DBConnection();
		
		test.createUser("Chris", "123 imaginary", "1234", "5678", 125000f, "1");
	}
}
