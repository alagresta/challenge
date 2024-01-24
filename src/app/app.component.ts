import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  entites: any;

  constructor(public api: ApiService) {
    this.api.getEntities().subscribe((entities) => {
      this.entites = entities;
    });
  }
}
