import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    console.log('test');
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(111);
    });
  }
}
