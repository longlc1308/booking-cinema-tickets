import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

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

  showtime(){
    this.router.navigate(['movies/detail/showtime'])
  }
}
