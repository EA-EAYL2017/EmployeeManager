package com.kainos.tdp.employeemanager;
public class Employee {
	
	private String employeeNumber, name, address, nationalInsuranceNo, IBAN;
	private float startingSalary;
	
	public Employee(String employeeNumber, String name, String address, String nationalInsuranceNo, String IBAN, float startingSalary) {
		setEmployeeNumber(employeeNumber);
		setName(name);
		setAddress(address);
		setNationalInsuranceNo(nationalInsuranceNo);
		setIBAN(IBAN);
		setStartingSalary(startingSalary);
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