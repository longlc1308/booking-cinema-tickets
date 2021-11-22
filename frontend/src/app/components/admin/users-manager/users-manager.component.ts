import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.css']
})
export class UsersManagerComponent implements OnInit {
  users: any[] = []
  ;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.userService.fetchUsers();
    const subscription = this.userService.fetchUsersUpdated().subscribe((data) => {
      this.users = data.users;
      console.log(this.users);
      subscription.unsubscribe();
    })
  }

}
