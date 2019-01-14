import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyMoviesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';

  getAllMoviesFromDB() {

    return this.http.get(`${this.url}`);

  }

  addNewMovieToDB(movie: Movie) {
    const data = movie;
    console.log(movie, data);
    return this.http.post(`${this.url}/add` , data);
  }

}




