import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import Swal  from 'sweetalert2';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly API_movie = environment.api_url + '/movie';
  private movies: Movie[] = [];
  private moviesUpdated = new Subject<{ movies: any[] }>();
  private MovieName: any[] = [];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }


  fetchMoviesUpdated() {
    return this.moviesUpdated.asObservable();
  }

  // thêm phim mới
  createMovie(movieName: string, idMovie: string, director: string, actor: string, type: string, language: string, rated: string, startAt: string, timeAmount: string, trailer: string, imageURL: File){
    const new_movie = new FormData();
    new_movie.append("movieName", movieName);
    new_movie.append("idMovie", idMovie);
    new_movie.append("director", director);
    new_movie.append("actor", actor);
    new_movie.append("type", type);
    new_movie.append("language", language);
    new_movie.append("rated", rated);
    new_movie.append("startAt", startAt);
    new_movie.append("timeAmount", timeAmount);
    new_movie.append("trailer", trailer);
    new_movie.append("imageURL", imageURL, movieName);
    return this.httpClient.post<{msg: string}>(this.API_movie, new_movie)
  }

  deleteMovie(movieID: string){
    this.httpClient.delete(this.API_movie + '/' + movieID).subscribe((result) => {
      console.log(result);
    })
  }


  fetchMovies(){
    const Movie = this.httpClient.get<{ data: any[] }>(this.API_movie);
    Movie.pipe(map((result) => {
      return {
        data: result.data.map((document) => {
          return {
            id: document._id,
          }
        })
      }
    }))
    Movie.subscribe(res => {
      this.movies = res.data;
      this.moviesUpdated.next({movies: [...this.movies]});
    })
  }

  fetchMovie(slug: string) {
    return this.httpClient.get(this.API_movie + '/' + slug)
  }

  getMovieName(){
    const MovieName = this.httpClient.get<{ data: any[] }>(this.API_movie);
    return MovieName.pipe(map((result) => {
      return {
        data: result.data.map((document) => {
          return {
            movieName: document.movieName
          }
        })
      }
    })).subscribe(res => {
      this.MovieName = res.data;
      this.moviesUpdated.next({movies : [...this.MovieName]});
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
