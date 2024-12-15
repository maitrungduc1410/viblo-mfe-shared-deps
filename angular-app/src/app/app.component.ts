import { Component } from '@angular/core';
import angularLogo from '../assets/angular.png';
import json from '../assets/test.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  angularLogo = angularLogo;

  ngOnInit() {
    console.log('json', json);
  }
}
