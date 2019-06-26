import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormationsResolvers } from '../resolvers/formationsResolvers';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:Array<Formation> = [];

  constructor(private route: ActivatedRoute ) { }
  

  ngOnInit() {
    /*this.formations = [
      new Formation(1, 'Module Angular'),
      new Formation(2, 'Module JavaScript'),
      new Formation(3, 'Module TypeScript'),
      new Formation(4, 'Module CSS'),
      ]*/

      this.route.data.subscribe(data => {
        console.log('Formations', data['formations'])
        this.formations = data['formations']
        console.log(this.formations)
      }
        );
  }

}
