import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { entities } from './data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getEntities(): Observable<any> {
    return of(entities);
  }
}
