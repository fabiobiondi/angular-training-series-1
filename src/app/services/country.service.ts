import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CountryService {
  constructor(private http: Http){}

  getCountries() {
    return this.http.get('http://localhost:3000/countries');
  }
}