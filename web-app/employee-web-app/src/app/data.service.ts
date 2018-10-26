import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  employees = this.http.get<Employee[]>('/api/employees');
  

  public addCity(newEmployee: Employee): void {
    this.employees = this.http.post<Employee[]>('/api/addcity', newEmployee);
  }

  public deleteCity(oldEmployee: Employee): void {
    this.employees = this.http.delete<Employee[]>('/api/deleteCity/'+ oldEmployee.employeeNo);
  }

  public updateCity(employeeToUpdate: Employee): void {
    this.employees = this.http.put<Employee[]>('/api/updateCity/' + employeeToUpdate.employeeNo, employeeToUpdate);
  }
}
