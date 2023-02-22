import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';

  constructor(public _route: Router,) {}


  goToInventory() {
    this._route.navigate(['inventory']);
  }

  goToCatalog() {
    this._route.navigate(['catalog']);
  }
}
