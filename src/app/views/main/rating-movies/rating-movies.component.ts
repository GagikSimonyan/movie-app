import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-rating-movies',
  templateUrl: './rating-movies.component.html',
  styleUrls: ['./rating-movies.component.scss'],
})
export class RatingMoviesComponent implements OnInit {
  topMoviesByRating: any;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getTopMoviesByrating().subscribe((movies) => {
      this.topMoviesByRating = movies;
      console.log(movies);
    });
  }
}
