import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mimeType } from 'src/app/shared/validators/mime-type.validator';
import { MovieService } from 'src/app/shared/services/movie.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public movieForm: FormGroup;
  showValidateSignIn: boolean = false;
  imagePreview: string = null;

  public rating: string [] = ['0','13', '16', '18']

  constructor(
    private _formBuilder: FormBuilder,
    private _location: Location,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.movieForm = this._formBuilder.group({
      movieName: [null, [Validators.required]],
      idMovie: [null, [Validators.required]],
      director: [null, [Validators.required]],
      actor: [null, [Validators.required]],
      type: [null, [Validators.required]],
      language: [null, [Validators.required]],
      rated: [null, [Validators.required]],
      startAt: [null, [Validators.required]],
      timeAmount: [null, [Validators.required]],
      trailer: [null, [Validators.required]],
      imageURL: [null],
    });
  }

  onImagePicked(event: Event): void {
    const files = (event.target as HTMLInputElement).files[0];
    this.movieForm.patchValue({ imageURL: files });
    this.movieForm.get('imageURL').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(files);
  }

  onAdd(){
    if(this.movieForm.invalid){
      this.showValidateSignIn = true
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
      })
      return;
    }
    if(this.imagePreview){
      this.movieService.createMovie(
        this.movieForm.value.movieName,
        this.movieForm.value.idMovie,
        this.movieForm.value.director,
        this.movieForm.value.actor,
        this.movieForm.value.type,
        this.movieForm.value.language,
        this.movieForm.value.rated,
        this.movieForm.value.startAt,
        this.movieForm.value.timeAmount,
        this.movieForm.value.trailer,
        this.movieForm.value.imageURL
      ).subscribe(
        (result) => {
        console.log(result);
        this.movieForm.reset();
        this.imagePreview = null;
        Swal.fire({
          icon: 'success',
          title: result.msg,
          showConfirmButton: true,
          timer: 1500
        })
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: error.msg,
            showConfirmButton: true,
            timer: 1500
          })
        })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Chưa tải ảnh lên',
        text: 'Vui lòng tải ảnh lên!',
      })
    }
  }

  goBack() {
    this._location.back();
  }

  deleteImage(){
    this.imagePreview = null;
  }
}
