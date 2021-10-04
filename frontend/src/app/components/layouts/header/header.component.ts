import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Jquery menu-bar
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

  toggleDropDown() {
    document.getElementById("submenu")!.classList.toggle("open");
  }
}
