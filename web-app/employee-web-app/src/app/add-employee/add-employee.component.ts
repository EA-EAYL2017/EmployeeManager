import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'employee-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddCityComponent implements OnInit {

  public newCity: City;
  data: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  ngOnInit() {
    this.newCity = new City();
  }

  addEmployee(addForm): void {
    if(addForm.valid) {
      var cityToAdd = this.newCity;
      this.newCity = new City();
      this.data.addEmployee(employeeToAdd);
    } else {
      console.error("Add Employee form is in an invalid state");
    }
  }
}