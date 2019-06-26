import { Component } from '@angular/core';
import { PATH_HOME, PATH_DETAIL } from './app.routes.constantes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';


  constructor() { }


  ngOnInit() {
    
  }

}
