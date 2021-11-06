import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const btn1 = document.querySelector('.btn-1');
    const btn2 = document.querySelector('.btn-2');

    btn1.addEventListener('click', () =>{
      btn2.classList.remove('active');
      btn1.classList.add('active');
    })
    btn2.addEventListener('click', () =>{
      btn1.classList.remove('active');
      btn2.classList.add('active');
    })
  }

  showtime(){
    this.router.navigate(['movies/detail/showtime'])
  }

}