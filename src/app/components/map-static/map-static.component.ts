import { Component, Input } from '@angular/core';

@Component({
  selector: 'map',
  // tslint:disable-next-line
  // inputs: ['lat', 'lng', 'zoom'],
  template: `
    <img *ngIf="lat && lng" 
    src="https://maps.googleapis.com/maps/api/staticmap?center={{lat}},{{lng}}
    &zoom={{zoom}}&size=200x200&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus" />
    `
})
export class MapComponent {
  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number = 5;
}

