import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

@Component({
  selector: 'employee-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() employee: Employee;
  switchboard: SwitchboardService;
  dataService: DataService;
  parentRouter: Router;
  app: AppComponent;
  

  constructor(switchboard: SwitchboardService, dataService: DataService, parentRouter: Router, app: AppComponent) {
    this.switchboard = switchboard;
    this.dataService = dataService;
    this.parentRouter = parentRouter;
    this.app = app;
    
  }

  subEmployee: Subscription;
  ngOnInit(): void {
    this.subEmployee = this.switchboard.employee$.subscribe((c) => {
      this.employee = c;
    });
  }

  ngOnDestroy(): void {
    this.subEmployee.unsubscribe();
  }

  delete(oldEmployee: Employee): void{
    this.dataService.deleteEmployee(oldEmployee);
    this.employee = null;
  }

  openForm(employee: Employee): void{
    this.app.openForm(employee);
  }

}
