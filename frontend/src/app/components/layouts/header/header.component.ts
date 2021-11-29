import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userId: any;
  userName: string;
  isAuth: boolean = false;
  public RoleAdmin: boolean;
  private authSubscription: Subscription;
  constructor(
    private authService: AuthService,
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

    this.isAuth = this.authService.getIsAuth();
    this.authSubscription = this.authService.getAuthStatus().subscribe(status => {
      this.isAuth = status;
      console.log(this.isAuth);
    });

    this.userId = this.authService.getUserId();
    this.authService.getAuthId().subscribe(userId => {
      this.userId = userId;
      console.log(this.userId);
    })

    this.userName = this.authService.getUserName();
    this.authService.getAuthName().subscribe(userName => {
      this.userName = userName;
      console.log(this.userName);
    })

    if(this.authService.getRoleGuard() == "Admin"){
      this.RoleAdmin = true;
    }
    else{
      this.RoleAdmin = false;
    }
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logOut()
  }
}
