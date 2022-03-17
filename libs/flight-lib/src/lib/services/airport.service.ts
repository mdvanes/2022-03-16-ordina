import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://www.angular.at/api/airport');
  }
}
