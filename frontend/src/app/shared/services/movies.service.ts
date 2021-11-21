import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly API_movie = environment.api_url + '/movies';
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  // thêm phim mới
  addMovie(movieForm: FormData){
    this.httpClient.post(this.API_movie, movieForm).subscribe((result) => {
      console.log(result);
    })
  }

  deleteMovie(movieID: string){
    this.httpClient.delete(this.API_movie + '/' + movieID).subscribe((result) => {
      console.log(result);
    })
  }



  // handle error
  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`${err.message}`);
    } else {
      console.log(`${err.status} + ${err.error}`);
    }
  }
}
