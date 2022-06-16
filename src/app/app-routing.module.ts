import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSerieComponent } from './components/add-serie/add-serie.component';
import { HomeComponent } from './components/home/home.component';
import { ShowTopComponent } from './components/show-top/show-top.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-serie', component: AddSerieComponent},
  {path: 'show-top', component: ShowTopComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
