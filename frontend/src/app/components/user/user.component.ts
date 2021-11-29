import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userId: string;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }


  onLogout(){
    this.authService.logOut()
  }

}
