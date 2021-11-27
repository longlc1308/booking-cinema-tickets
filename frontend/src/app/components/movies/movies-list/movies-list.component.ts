import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies : any[] = [];

  constructor(
    private router: Router,
    private  movieService: MovieService
  ) { }

  ngOnInit(): void {
    const btn1 = document.querySelector('.btn-1');
    const btn2 = document.querySelector('.btn-2');

    btn1.addEventListener('click', () =>{
      btn2.classList.remove('active');
      btn1.classList.add('active');
    })
    btn2.addEventListener('click', () =>{
      btn1.classList.remove('active');
      btn2.classList.add('active');
    })
    this.fetchData();
  }

  showtime(){
    this.router.navigate(['movies/detail/showtime'])
  }

  fetchData() {
    this.movieService.fetchMovies();
    const subscription = this.movieService.fetchMoviesUpdated().subscribe((data) => {
      this.movies = data.movies;
      console.log(this.movies);
      subscription.unsubscribe();
    })
  }
}
