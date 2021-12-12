import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: any;
  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.reveal);
    this.fetchData();
  }

  reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    for ( let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 50;
      if(revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
      }
      else {
        reveals[i].classList.remove('active');
      }
    }
  }
  customOption1: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  }
  customOption2: OwlOptions = {
    dots: false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    margin: 15,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
    nav: true
  }

  fetchData() {
    this.movieService.fetchMovies();
    const subscription = this.movieService.fetchMoviesUpdated().subscribe((data) => {
      this.movies = data.movies;
      subscription.unsubscribe();
    })
  }

}
