import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee';
import { Router } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@Component({
  selector: 'employee-root',
  providers: [UpdateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Wonderful Employee Application";  
  parentRouter: Router;
  update: UpdateEmployeeComponent;

  constructor(parentRouter: Router, update: UpdateEmployeeComponent){
    this.parentRouter = parentRouter;
    this.update = update;
  }

  @ViewChild('tabs')
  private tabs:NgbTabset;

  openForm(employee: Employee): void{
    console.log(this.tabs);
    this.tabs.select("ngb-tab-2");
    this.update.sendData(employee);
  }
}

