import { Movie } from './../../shared/models/movie';
import { MyMoviesService } from './../../shared/services/my-movies.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie [];

  constructor(private myMoviesService: MyMoviesService , private router: Router) { }

  ngOnInit() {

    this.myMoviesService.getAllMoviesFromDB().subscribe( (movies: Array<Movie>) => {

      this.movies = movies;
      console.log(this.movies);
    });

  }

  navigateToAddMoviePage() {

    this.router.navigate([`/add-movie`]);
  }


}
