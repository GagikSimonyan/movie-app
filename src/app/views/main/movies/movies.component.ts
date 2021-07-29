import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any;

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}
