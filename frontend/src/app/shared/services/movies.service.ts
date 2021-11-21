import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  // thêm phim mới
  addMovie(movieForm: Movie, imageURL: any){
  }
}
