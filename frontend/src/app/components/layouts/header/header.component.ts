import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    menuBtn?.addEventListener('click',() => {
      menu?.classList.add("active")
    });
    closeBtn?.addEventListener('click',() => {
      menu?.classList.remove("active")
    })
  }

}
