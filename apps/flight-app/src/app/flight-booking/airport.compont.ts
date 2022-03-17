import { Component } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-lib';
import { Observable } from 'rxjs';

@Component({
  template: `<ul>
    <li *ngFor="let airport of airports$ | async"></li>
  </ul>`,
})
export class AirportComponent {
  airports$: Observable<string[]> = this.airportService.findAll();

  constructor(private airportService: AirportService) {}
}
