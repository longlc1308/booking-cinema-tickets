import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-showtime',
  templateUrl: './movie-showtime.component.html',
  styleUrls: ['./movie-showtime.component.css']
})
export class MovieShowtimeComponent implements OnInit {
  public listDay = [];
  cgv_city: Array<string>;
  lastId: string ="0"
  oldId: string = "0";
  private days = 7;
  private listDate = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  cinemasList = [
    {city: 'Hà Nội', cgvList: ['CGV Vincom Center Bà Triệu', 'CGV Vincom Royal City', 'CGV Hồ Gươm Plaza']},
    {city: 'Hồ Chí Minh', cgvList: ['CGV Hùng Vương Plaza', 'CGV Crescent Mall', 'CGV Pandora City']},
  ];
  timeStart = ['8:00 AM','16:00 PM']

  constructor() {
    this.cgv_city = this.cinemasList[0].cgvList;
  }

  ngOnInit(): void {
    const today = new Date();
    for (let i = 0; i < this.days; i++) {
      today.setDate(today.getDate() + 1);
      const date = today.getDate();
      const month = today.getMonth() + 1;
      const dayNumber = today.getDay();
      const day = this.listDate[dayNumber];
      this.listDay.push({date: date, month: month, day: day});
    }
  }

  onChange(index: string){
    this.oldId = index;
  }
  selectRegion(id: string){
    this.cgv_city = this.cinemasList[id].cgvList;
    this.lastId = id;
  }
}
