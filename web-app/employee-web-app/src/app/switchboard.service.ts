import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {

  private cityWatcher = new Subject<City>();
  public city$ = this.cityWatcher.asObservable();

  public switchCity(city: City) {
    if (city) {
      this.cityWatcher.next(city); 
    }
  }

  constructor() { }
}
