import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{ path: 'home/movies-list', component: MoviesListComponent } ,
{ path: 'home/add-movie', component: AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
