import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  cities = this.http.get<City[]>('/api/cities');
  

  public addCity(newCity: City): void {
    this.cities = this.http.post<City[]>('/api/addcity', newCity);
    console.log(this.cities);
  }

  public deleteCity(oldCity: City): void {
    this.cities = this.http.delete<City[]>('/api/deleteCity/'+ oldCity.id);
    console.log(this.cities);
  }

  public updateCity(cityToUpdate: City): void {
    this.cities = this.http.put<City[]>('/api/updateCity/' + cityToUpdate.id, cityToUpdate);
    console.log(this.cities);
  }
}
