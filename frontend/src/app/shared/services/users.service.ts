import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private today = new Date();
  private readonly API_user = environment.api_url + '/users';
  private token: string;
  private userId: string;
  // private role: string;
  private isUserAuthenticated: boolean = false;
  public authStatus = new Subject<boolean>();
  public tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  // signup
  createUser(name: string, phone: string, email: string, password: string, birthday: string, gender: string, area: string) {
    const user : User = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      date_of_birth: birthday,
      gender: gender,
      reg_date: this.today,
      area: area,
      role: "Member",
      member_rankpoints: 0,
    }
    this.httpClient.post(this.API_user + '/signup', user).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/']);
    },
    (error) => {
      console.log(error);
    })
  }

  // login
  logIn(email: string, password: string) {
    const User = {
      email: email,
      password: password,
    }
    this.httpClient.post<{token: string, expiresIn: number, userId: string, role: string}>(this.API_user + '/login', User).subscribe((result) => {
      console.log(result);
    })
  }

  // login with google
  async loginWithGoogle(){
    // const googleProvider = new firebase.auth.GoogleAuthProvider()
  }

  //update user data
  updateUserInfo(id: string, name: string, phone: string, gender: string, birthday: string, area: string) {
    const updateUserData = {
      id: id,
      name: name,
      phone: phone,
      gender: gender,
      birthday: birthday,
      area: area,
    }
    this.httpClient.put(this.API_user + '/update', updateUserData).subscribe((result) => {
      console.log(result);
    })
  }

  // change password
  changePassword(id: string, new_pw: string, confirm_pw: string){
    const password = {
      id: id,
      new_pw: new_pw,
      confirm_pw: confirm_pw,
    }
    this.httpClient.put(this.API_user + '/update', password).subscribe((result) => {
      console.log(result);
    })
  }

  autoAuth() {
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0) {
      this.userId = authInformation.userId;
      this.token = authInformation.token;
      this.isUserAuthenticated = true;
      this.authStatus.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    console.log('setting timer: ' + duration)
    this.tokenTimer = setTimeout(() => {
      this.logOut()
    }, duration * 1000)
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', role);
  }

  getRoleGuard() {
    return localStorage.getItem('role');
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const userId = localStorage.getItem('userId');
    if(!token || !expirationDate){
      return;
    }
    return{
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    }
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  }

  logOut() {
    this.userId = null;
    this.token = null;
    this.isUserAuthenticated = false;
    this.authStatus.next(false);
    this.clearAuthData();
    this.router.navigate(['/'])
  }


  // error
  handleError(err) {
    if(err.error instanceof Error) {
      console.log(`${err.message}`);
    }
    else{
      console.log(`${err.status} + ${err.message}`);
    }
  }
}
