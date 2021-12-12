import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ShowtimeService } from 'src/app/shared/services/showtime.service';
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
  cgvSites = ['CGV Vincom Center Bà Triệu','CGV Vincom Royal City','CGV Hồ Gươm Plaza','CGV Hùng Vương Plaza','CGV Crescent Mall','CGV Pandora City'];
  cgvDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  constructor(
    private _formBuilder: FormBuilder,
    private movieService: MovieService,
    private showService: ShowtimeService,
  ) { }

  ngOnInit(): void {
    this.showTimeForm = this._formBuilder.group({
      movieName: [null, [Validators.required]],
      siteName: [null, [Validators.required]],
      showDate: [null, [Validators.required]],
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
    console.log(this.showTimeForm.value);
    this.showService.addShowtime(this.showTimeForm.value.movieName,
      this.showTimeForm.value.siteName,
      this.showTimeForm.value.showDate,
      this.showTimeForm.value.startTime,
      this.showTimeForm.value.price).subscribe((result) => {
        Swal.fire({
          icon: 'success',
          title: result.msg,
          showConfirmButton: true,
          timer: 1500
        })
      },(err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.msg,
          showConfirmButton: true,
          timer: 1500
        })
      })
  }

}
