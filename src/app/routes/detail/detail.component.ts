import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_HOME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idDetail:number = 0;

  constructor(private router: Router) { }

  

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  

  ngOnInit() {
  }

}
