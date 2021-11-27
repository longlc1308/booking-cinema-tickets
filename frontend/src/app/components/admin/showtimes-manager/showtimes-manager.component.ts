import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/shared/services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showtimes-manager',
  templateUrl: './showtimes-manager.component.html',
  styleUrls: ['./showtimes-manager.component.css']
})
export class ShowtimesManagerComponent implements OnInit {
  public showTimeForm: FormGroup;
  public movies: any;
  showValidateSignIn: boolean = false;
  cgvSites = ['CGV Vincom Center Bà Triệu','CGV Vincom Royal City','CGV Hồ Gươm Plaza','CGV Hùng Vương Plaza','CGV Crescent Mall','CGV Pandora City']
  constructor(
    private _formBuilder: FormBuilder,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.showTimeForm = this._formBuilder.group({
      movieName: [null, [Validators.required]],
      siteName: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
    this.fetchMovies();
  }
  fetchMovies(){
    this.movieService.getMovieName();
    const subscription = this.movieService.fetchMoviesUpdated().subscribe((data) => {
      this.movies = data.movies;
      console.log(this.movies);
      subscription.unsubscribe();
    })
  }

  onAdd(){
    if(this.showTimeForm.invalid){
      this.showValidateSignIn = true;
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
      })
      return
    }
    console.log('up thanh cong');
    console.log(this.showTimeForm.value)
  }

}
