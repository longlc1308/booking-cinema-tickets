import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor() { }

  imagesList = [
    { src: './../../../assets/images/series/blood-shot.jpg'},
    { src: './../../../assets/images/series/bat-man.jpg'},
    { src: './../../../assets/images/series/call.jpg'},
  ]

  imageUrl : string = this.imagesList[0].src;
  oldId: string = "0";

  ngOnInit(): void {
  }
  onSelectImage(url: string, index: string) {
    this.imageUrl = url;
    this.oldId = index;
  }
}
