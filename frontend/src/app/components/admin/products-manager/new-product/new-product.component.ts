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
  imageArea: boolean = true;
  imageURL = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _location: Location,
  ) { }

  ngOnInit(): void {
    this.movieForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      idMovie: ['', [Validators.required]],
      directors: ['', [Validators.required]],
      actors: ['', [Validators.required]],
      types: ['', [Validators.required]],
      description: ['', [Validators.required]],
      rated: ['', [Validators.required]],
      startAt: ['', [Validators.required]],
      timeAmount: ['', [Validators.required]],
      imageURL: ['', { validators: [Validators.required], asyncValidators: [mimeType] }],
    });
  }

  onImagePicked(event: Event): void {
    const ImageFiles: FileList = <FileList>(event.target as HTMLInputElement).files;
    for(let i = 0; i < ImageFiles.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(ImageFiles[i])
      reader.onload = () => {
        this.imageURL.push(reader.result);
      }
      this.imageArea = false;
    }
  }

  onAdd(){

  }

  goBack() {
    this._location.back();
  }

  deleteImage(image: any){
    const index = this.imageURL.indexOf(image);
    this.imageURL.splice(index, 1);
  }
}
