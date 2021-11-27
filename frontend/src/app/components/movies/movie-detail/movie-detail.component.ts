import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  private slug: string;
  public data: any;
  constructor(
    private router: Router,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
  ) { }

  // imagesList = [
  //   { src: './../../../assets/images/series/blood-shot.jpg'},
  //   { src: './../../../assets/images/series/bat-man.jpg'},
  //   { src: './../../../assets/images/series/call.jpg'},
  // ]

  // imageUrl : string = this.imagesList[0].src;
  // oldId: string = "0";

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    this.fetchData();
  }

  fetchData() {
    this.movieService.fetchMovie(this.slug).subscribe(result => {
      this.data = result;
      // this.data.id = this.data._id;
      // console.log(this.data.id);
    },
    (err) => {
      this.movieService.handleError(err);
    })
  }
}
