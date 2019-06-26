import { Component, OnInit } from '@angular/core';
import { Connaissance } from '../models/connaissance';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances:Array<Connaissance> = [];


  constructor() { }

  ngOnInit() {
    this.connaissances = [
      new Connaissance('java'),
      new Connaissance('python'),
      new Connaissance('javascript')
      ]
  }

}
