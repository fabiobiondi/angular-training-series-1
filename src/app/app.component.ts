import { Component } from '@angular/core';
import { Country } from './model/country';
import { Http } from '@angular/http';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryService]
})
export class AppComponent {

  // EXERCISE 1: hard coded
  /*
  countries: Country[] = [
    { id: 1001, name: 'Italy', lat: 42, lng: 12 },
    { id: 1002, name: 'USA', lat: 111, lng: 33 },
    { id: 1003, name: 'Gibuti', lat: 11, lng: 44 }
  ];
  current:Country = this.countries[0];
  */

  /*
  // EXERCISE 2: XHR request
  countries: Country[];
  current: Country;
  constructor(private http: Http) {
    http.get('http://localhost:3000/countries')
      .subscribe(res => {
        console.log (res.json())
        this.countries = res.json();
        this.current = this.countries[0];
      })
  }

  */

  // EXERCISE: 3
  countries: Country[];
  current: Country;
  constructor(private srv: CountryService) {
    srv.getCountries()
      .subscribe(res => {
        console.log (res.json())
        this.countries = res.json();
        this.current = this.countries[0];
      })
  }

  select(c: Country): void {
    this.current = c;
  }
}
