import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieShowtimeComponent } from './movie-showtime/movie-showtime.component';
import { SafeHtmlPipeModule } from 'src/app/shared/pipes/pipe.module';

const movieRouters : Routes = [
  { path: '', component: MoviesComponent , children: [
    { path: '', component: MoviesListComponent },
    { path: ':slug', component: MovieDetailComponent },
    { path: 'detail/showtime', component: MovieShowtimeComponent }
  ]}
]

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MovieShowtimeComponent
  ],
  imports: [
    CommonModule,
    SafeHtmlPipeModule,
    RouterModule.forChild(movieRouters)
  ]
})

export class movieModule {}
