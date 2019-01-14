import { AuthGuard } from './shared/gurads.js/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/login/form/form.component';

import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { LoginPageGuard } from './shared/gurads.js/login-page.guard';


const routes: Routes = [
{ path: 'login', component: FormComponent ,  canActivate: [LoginPageGuard] } ,
{ path: 'home', component: MoviesListComponent,  canActivate: [AuthGuard] } ,
{ path: 'add-movie', component: AddMovieComponent, canActivate: [AuthGuard] } ,
{ path: '', redirectTo: 'login', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
