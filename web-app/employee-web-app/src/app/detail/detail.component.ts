import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

@Component({
  selector: 'city-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() city: City;
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

  subCity: Subscription;
  ngOnInit(): void {
    this.subCity = this.switchboard.city$.subscribe((c) => {
      this.city = c;
    });
  }

  ngOnDestroy(): void {
    this.subCity.unsubscribe();
  }

  delete(oldCity: City): void{
    this.dataService.deleteCity(oldCity);
    this.city = null;
  }

  openForm(city: City): void{
    this.app.openForm(city);
  }

}
