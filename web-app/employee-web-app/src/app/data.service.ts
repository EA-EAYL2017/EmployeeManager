import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  employees;

  public getEmployees(): void{
    this.http.get<Employee[]>('/api/employees')
    .subscribe(data => {
      this.employees = data;
    })
  }

  public addEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
    this.http.post<Employee[]>('/api/employee', newEmployee)
    .subscribe(data => {
      this.employees = data;
    });
  }

  public deleteEmployee(oldEmployee: Employee): void {
    this.employees = this.http.delete<Employee[]>('/api/employee/'+ oldEmployee.id);
  }

  public updateEmployee(employeeToUpdate: Employee): void {
    this.employees = this.http.put<Employee[]>('/api/employee/' + employeeToUpdate.id, employeeToUpdate);
  }
}
