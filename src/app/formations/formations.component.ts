import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:Array<Formation> = [];


  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation(1, 'Module Angular'),
      new Formation(2, 'Module JavaScript'),
      new Formation(3, 'Module TypeScript')
      ]
  }

}
