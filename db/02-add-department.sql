-- set @username := 'employee_manager';
-- set @password := 'password';

USE EmployeeManager;
ALTER TABLE Employees ADD COLUMN department VARCHAR(30) NOT NULL;