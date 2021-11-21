import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mimeType } from 'src/app/shared/validators/mime-type.validator';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public movieForm: FormGroup;
  showValidateSignIn: boolean = false;
  imagePreview: string = null;

  public rating: string [] = ['1', '2', '3', '4', '5']

  constructor(
    private _formBuilder: FormBuilder,
    private _location: Location,
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
      imageURL: [null, [Validators.required]],
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
      console.log("sai roi");
      return;
    }
    const new_movie = new FormData();
    new_movie.append("movieName", this.movieForm.value.movieName);
    new_movie.append("idMovie", this.movieForm.value.idMovie);
    new_movie.append("director", this.movieForm.value.director);
    new_movie.append("actor", this.movieForm.value.actor);
    new_movie.append("type", this.movieForm.value.type);
    new_movie.append("language", this.movieForm.value.language);
    new_movie.append("rated", this.movieForm.value.rated);
    new_movie.append("startAt", this.movieForm.value.startAt);
    new_movie.append("timeAmount", this.movieForm.value.timeAmount);
    new_movie.append("trailer", this.movieForm.value.trailer);
    if(this.imagePreview){
      new_movie.append("image", this.movieForm.value.image, this.movieForm.value.movieName);
      console.log(new_movie);
    }
    else{
      console.log("chua up anh");
    }
  }

  goBack() {
    this._location.back();
  }

  deleteImage(){
    this.imagePreview = null;
  }
}
