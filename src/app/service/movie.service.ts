import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly URL: string = 'http://localhost:3000/movies/';
  public movies: any = [];

  constructor(private http: HttpClient) {}

  getAllMovies() {
    const request = this.http.get(this.URL);
    request.subscribe((movies) => {
      this.movies = movies;
    });
    return request;
  }

  getTopMoviesByrating() {
    return this.http.get(this.URL + '?_sort=imdbRating&_order=desc&_limit=6');
  }
}
