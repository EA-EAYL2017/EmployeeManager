package com.kainos.tdp.employeemanager;

public class Employee {
	
	private String employeeNumber, name, address, nationalInsuranceNo, IBAN;
	private float startingSalary;
	
	
	public Employee(String _employeeNumber, String _name, String _address, String _nationalInsuranceNo, String _IBAN, float _startingSalary) {
		setEmployeeNumber(_employeeNumber);
		setName(_name);
		setAddress(_address);
		setNationalInsuranceNo(_nationalInsuranceNo);
		setIBAN(_IBAN);
		setStartingSalary(_startingSalary);
	}


	private String getEmployeeNumber() {
		return employeeNumber;
	}


	private void setEmployeeNumber(String employeeNumber) {
		this.employeeNumber = employeeNumber;
	}


	private String getName() {
		return name;
	}


	private void setName(String name) {
		this.name = name;
	}


	private String getAddress() {
		return address;
	}


	private void setAddress(String address) {
		this.address = address;
	}


	private String getNationalInsuranceNo() {
		return nationalInsuranceNo;
	}


	private void setNationalInsuranceNo(String nationalInsuranceNo) {
		this.nationalInsuranceNo = nationalInsuranceNo;
	}


	private String getIBAN() {
		return IBAN;
	}


	private void setIBAN(String iBAN) {
		IBAN = iBAN;
	}


	private float getStartingSalary() {
		return startingSalary;
	}


	private void setStartingSalary(float startingSalary) {
		this.startingSalary = startingSalary;
	}

}
