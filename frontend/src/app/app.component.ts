import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router, NavigationError } from '@angular/router';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isProgressBarLoading = false;

  constructor(
    private _router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit():void {
    this.authService.autoAuthUser();
    this._router.events.subscribe((event:Event) => {
      if (event instanceof NavigationStart) {
        this.isProgressBarLoading = true;
      }
      if (event instanceof NavigationEnd) {
        this.isProgressBarLoading = false;
      }
      if (event instanceof NavigationError) {
        this.isProgressBarLoading = false;
        alert('please try again');
      }
    })
  }
}
