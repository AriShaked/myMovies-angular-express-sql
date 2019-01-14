import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbMoviesService {

  constructor(private http: HttpClient) { }

    searchMovieOnOmdbByName(movieName) {
      console.log(movieName);

      return this.http.get(`http://www.omdbapi.com/?s=${movieName}&apikey=a1ff3209&type=movie`);
    }
}
