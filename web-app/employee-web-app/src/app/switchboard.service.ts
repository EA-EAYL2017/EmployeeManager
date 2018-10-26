import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {
  private employeeWatcher = new Subject<Employee>();
  public employee$ = this.employeeWatcher.asObservable();
  public currentEmployee = null;

  public switchEmployee(employee: Employee) {
    if (employee) {
      this.employeeWatcher.next(employee);
      this.currentEmployee = employee;
    }
  }

  constructor() { }
}
