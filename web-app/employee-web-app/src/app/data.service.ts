import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  employees = this.http.get<Employee[]>('/api/employees');
  

  public addEmployee(newEmployee: Employee): void {
    this.employees = this.http.post<Employee[]>('/api/addEmployee', newEmployee);
  }

  public deleteEmployee(oldEmployee: Employee): void {
    this.employees = this.http.delete<Employee[]>('/api/deleteEmployee/'+ oldEmployee.employeeNo);
  }

  public updateEmployee(employeeToUpdate: Employee): void {
    this.employees = this.http.put<Employee[]>('/api/updateEmployee/' + employeeToUpdate.employeeNo, employeeToUpdate);
  }
}
