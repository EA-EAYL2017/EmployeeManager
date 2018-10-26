import { Component, OnInit, NgModule, Input } from '@angular/core';
import { City } from '../city';
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
  selector: 'city-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css'],
})
export class UpdateCityComponent implements OnInit {

  data: DataService;
  public newCity: City;
  public switchboardService;
  cityDetails: City;

  constructor(private fb: FormBuilder){}

  @Input() updateForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    countrycode: new FormControl(),
    district: new FormControl(),
    population: new FormControl()
  });
  
  ngOnInit() {
    this.newCity = new City();
  }

  updateCity(addForm): void {
    if(addForm.valid) {
      var cityToUpdate = this.newCity;
      this.newCity = new City();
      this.data.updateCity(cityToUpdate);
    } else {
      console.error("Update City form is in an invalid state");
    }
  }

  sendData(city: City): void {
    this.updateForm.get('id').setValue(city.id);
    this.updateForm.get('name').setValue(city.name);
    this.updateForm.get('countrycode').setValue(city.countrycode);
    this.updateForm.get('district').setValue(city.district);
    this.updateForm.get('population').setValue(city.population);
  }
}
