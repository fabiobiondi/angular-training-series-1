import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../model/country';

@Component({
  selector: 'tab-bar',
  template: `
  <ul class="nav nav-tabs" *ngIf="items">
    <li *ngFor="let tab of items" 
        [ngClass]="{'active': tab.id === active?.id}"
        (click)="select(tab)">
      <a>{{tab.name}}</a>
    </li>
  </ul>
  `,
})
export class TabBarComponent {
  @Input() items: Country[];
  @Input() active: Country;
  @Output() onTabSelect: EventEmitter<Country>;

  constructor() {
    this.onTabSelect = new EventEmitter<Country>();
  }

  select(tab: Country): void {
    this.onTabSelect.emit(tab);
  }
}

