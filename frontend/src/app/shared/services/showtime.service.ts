import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  private readonly API_showtime = environment.api_url + '/showtime';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  // thêm lịch chiếu
  addShowtime(movieName: string, siteName: string, showDate: string, startTime: string,price: string ){
    const new_showtime = new FormData();
    new_showtime.append('movieName', movieName)
    new_showtime.append('siteName', siteName)
    new_showtime.append('showDate', showDate)
    new_showtime.append('startTime', startTime)
    new_showtime.append('price', price)
    return this.httpClient.post<{msg: string}>(this.API_showtime, new_showtime);
  }
}
