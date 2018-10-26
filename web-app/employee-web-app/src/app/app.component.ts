import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee';
import { Router } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@Component({
  selector: 'employee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Wonderful Employee Application";  
  parentRouter: Router;
  constructor(parentRouter: Router){
    this.parentRouter = parentRouter;
  }

  @ViewChild('tabs')
  private tabs:NgbTabset;

  @ViewChild(UpdateEmployeeComponent)
  updateEmployee:UpdateEmployeeComponent;

  openForm(): void{
    console.log(this.tabs);
    this.tabs.select("ngb-tab-2");
  }
}

