import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MyMoviesService } from './../../shared/services/my-movies.service';
import { Movie } from './../../shared/models/movie';
import { OmdbMoviesService } from './../../shared/services/omdb-movies.service';




@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: Movie [];
  onAddPage = true;
  error: string;

  constructor(private omdbMoviesService: OmdbMoviesService , private myMoviesService: MyMoviesService ,
     private router: Router) { }

  ngOnInit() {
  }

  searchForMovie(movieName) {

    this.omdbMoviesService.searchMovieOnOmdbByName(movieName).subscribe((result: any) => {
      console.log(result);
      if (result.Error) {
        this.error = result.Error;
        this.movies = [];
      } else {
        this.movies = result.Search;
        console.log(this.movies);
        this.error = null;
      }
    });
  }


  addNewMovieToMyList(myMovie: Movie) {
    this.myMoviesService.addNewMovieToDB(myMovie).subscribe(result => {
      console.log(result);

      this.navigateToHomePage();

    });
  }


  navigateToHomePage() {
    this.router.navigate([`/home`]);
  }
}
