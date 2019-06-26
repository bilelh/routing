import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';
import { PATH_HOME, PATH_DETAIL } from './app.routes.constantes';
import { FormationsComponent } from './formations/formations.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';

export const PATH_DETAIL_FORMATIONS = 'formations';
export const PATH_DETAIL_SKILLS = 'connaissances';

const routes: Routes = [
  { path: PATH_HOME, component: HomeComponent },
  {
    path: PATH_DETAIL + ":idDetail",
    component: DetailComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
      { path: PATH_DETAIL_FORMATIONS, component: FormationsComponent },
      { path: PATH_DETAIL_SKILLS, component: ConnaissancesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
