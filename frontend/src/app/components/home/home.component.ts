import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  oldId: string = "0";
  event_img: Array<string>;
  events= [
    {title: 'Tin mới và sự kiện', listImages: ['https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/n/9/n95_240x201_1.jpg',
    'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happy-new-year-240x201_1.png',
    'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/o/doreamon_web_app_240x201.jpg',
    'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_79k_240x201_170920.png'
    ]},
    {title: 'Thành viên CGV', listImages: ['https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_240x201.jpg',
    'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happywednesday240x201_1.jpg',
    'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/u/culture-240_1.jpg',
    'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-crm-team-chi-1-duoc-2-240x201.jpg'
    ]}
  ]
  constructor() {
    this.event_img = this.events[0].listImages;
  }

  ngOnInit(): void {
  }

  selectEvent(id: string, index: number){
    console.log(id)
    if(this.oldId){
      const btnUnactive = document.getElementById(this.oldId);
      btnUnactive.classList.remove("active");
    }
    const btnActive = document.getElementById(id);
    btnActive.classList.add("active");
    this.event_img = this.events[index].listImages;
    this.oldId = id;
  }

}
