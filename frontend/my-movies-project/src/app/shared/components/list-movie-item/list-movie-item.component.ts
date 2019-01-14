import { Movie } from './../../../shared/models/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-list-movie-item',
  templateUrl: './list-movie-item.component.html',
  styleUrls: ['./list-movie-item.component.css']
})
export class ListMovieItemComponent implements OnInit {
  @Input() onAddPage: boolean;
  @Input() movies: Movie [];
  @Output() movie: EventEmitter<Movie> = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  emitMovieDetails(Title: string , Year: string  , Poster: string , imdbID: string) {
      console.log(Title , Year , Poster  , imdbID);

    const movieData = {
      Title: Title ,
      Year: Year ,
      Poster: imdbID ,
      imdbID: Poster
    };
    this.movie.emit(movieData);

  }

}
