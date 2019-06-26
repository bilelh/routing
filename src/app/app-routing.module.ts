import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';
import { PATH_HOME, PATH_DETAIL } from './app.routes.constantes';

const routes: Routes = [
  { path: PATH_HOME, component: HomeComponent },
{ path: PATH_DETAIL, component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
