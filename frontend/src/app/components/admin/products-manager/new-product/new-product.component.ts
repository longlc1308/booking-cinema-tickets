import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  imageArea: boolean = true;
  imageURL = [];

  constructor(
    private _location: Location,
  ) { }

  ngOnInit(): void {
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

  goBack() {
    this._location.back();
  }

  deleteImage(image: any){
    const index = this.imageURL.indexOf(image);
    this.imageURL.splice(index, 1);
  }
}
