package com.kainos.tdp.employeemanager;
public class Employee {
	
	private String name, address, nationalInsuranceNo, IBAN, department;
	private float startingSalary;
	
	public Employee(String name, String address, String nationalInsuranceNo, String IBAN, float startingSalary, String department) {
		setName(name);
		setAddress(address);
		setNationalInsuranceNo(nationalInsuranceNo);
		setIBAN(IBAN);
		setStartingSalary(startingSalary);
		setDepartment(department);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNationalInsuranceNo() {
		return nationalInsuranceNo;
	}

	public void setNationalInsuranceNo(String nationalInsuranceNo) {
		this.nationalInsuranceNo = nationalInsuranceNo;
	}

	public String getIBAN() {
		return IBAN;
	}

	public void setIBAN(String iBAN) {
		IBAN = iBAN;
	}

	public float getStartingSalary() {
		return startingSalary;
	}

	public void setStartingSalary(float startingSalary) {
		this.startingSalary = startingSalary;
	}
	
	@Override 
	public String toString() {
	return	String.format("Name: %s "
				+ "\nAddress: %s"
				+ "\nNational Insurance Number: %s"
				+ "\nBank Account Number: %s"
				+ "\nStarting Salary: £%.2f"
				+ "\nDepartment: %s", 
				this.getName(),
				this.getAddress(),
				this.getNationalInsuranceNo(),
				this.getIBAN(),
				this.getStartingSalary(),
				this.getDepartment());
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}
}
