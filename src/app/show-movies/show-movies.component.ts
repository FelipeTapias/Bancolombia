import { Component, OnInit } from '@angular/core';
import { ShowMoviesService } from './services/show-movies.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  movies: any;

  constructor(private service: ShowMoviesService) { }

  ngOnInit(): void {

    this.service.getAllFilms().subscribe((resp) => {
        this.movies = resp;
    });
  }

}
