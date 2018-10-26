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
  public newEmployee: Employee;
  public switchboardService;
  employeeDetails: Employee;

  constructor(private fb: FormBuilder){}

  @Input() updateForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    countrycode: new FormControl(),
    district: new FormControl(),
    population: new FormControl()
  });
  
  ngOnInit() {
    this.newEmployee = new Employee();
  }

  updateCity(addForm): void {
    if(addForm.valid) {
      var cityToUpdate = this.newEmployee;
      this.newEmployee = new Employee();
      this.data.updateEmployee(employeeToUpdate);
    } else {
      console.error("Update Employee form is in an invalid state");
    }
  }

  sendData(employee: Employee): void {
    this.updateForm.get('id').setValue(city.id);
    this.updateForm.get('name').setValue(city.name);
    this.updateForm.get('countrycode').setValue(city.countrycode);
    this.updateForm.get('district').setValue(city.district);
    this.updateForm.get('population').setValue(city.population);
  }
}
