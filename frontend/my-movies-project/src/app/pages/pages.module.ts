import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [MoviesListComponent, AddMovieComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
