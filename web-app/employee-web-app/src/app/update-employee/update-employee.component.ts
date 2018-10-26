import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { SwitchboardService } from '../switchboard.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    FormBuilder,
    ReactiveFormsModule
  ]
})
@Component({
  selector: 'employee-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {

  data: DataService;
  public employee: Employee;
  public switchboard: SwitchboardService;

  constructor(switchboard: SwitchboardService, data: DataService){
    this.switchboard = switchboard;
    this.data = data;
  }
  
  ngOnInit() {
    console.log(this.employee);
    this.employee = this.switchboard.currentEmployee || new Employee();
    console.log(this.employee);
  }

  updateEmployee(updateForm): void {
    if(updateForm.valid) {
      var employeeToUpdate = this.employee;
      this.employee = new Employee();
      this.data.updateEmployee(employeeToUpdate);
    } else {
      console.error("Edit Employee form is in an invalid state");
    }
  }

  sendData(employee: Employee): void {
  }
}
