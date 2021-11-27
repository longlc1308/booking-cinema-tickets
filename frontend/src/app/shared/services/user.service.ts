import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_user = environment.api_url + '/user';
  private users: User[] = [];
  private usersUpdated = new Subject<{ users: User[] }>();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  fetchUsersUpdated() {
    return this.usersUpdated.asObservable();
  }

  fetchUsers(){
    const User = this.httpClient.get<{ data: any[] }>(this.API_user);
    User.pipe(map((result) => {
      return {
        data: result.data.map((document) => {
          return {
            id: document._id,
          }
        })
      }
    }))
    User.subscribe(res => {
      this.users = res.data;
      this.usersUpdated.next({ users: [...this.users]})
    })
  }
}
