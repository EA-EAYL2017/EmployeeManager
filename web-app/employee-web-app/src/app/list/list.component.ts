import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'city-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ngOnInit() {
  }
  switchboard: SwitchboardService;
  thisEmployee: Employee;
  data: DataService;

  constructor (dataService: DataService, switchboard: SwitchboardService){
    this.data = dataService;
    this.switchboard = switchboard;
  }

  onSelect(newEmployee: Employee): void{
    this.thisEmployee = newEmployee;
    this.switchboard.switchCity(this.thisEmployee);
  }

  
}
