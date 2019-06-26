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
    /* this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    }); */
    /* this.route.paramMap.subscribe((params:ParamMap) => {
      console.log('isDetail', params.get('idDetail'))
    }) */

  }

}
