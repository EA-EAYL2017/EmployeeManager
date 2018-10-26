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
  public switchboardService;

  constructor(private fb: FormBuilder){}

  @Input() updateForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    countrycode: new FormControl(),
    district: new FormControl(),
    population: new FormControl()
  });
  
  ngOnInit() {
    this.employee = new Employee();
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
