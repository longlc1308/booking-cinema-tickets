import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private today = new Date();
  private readonly API_user = environment.api_url + '/user';
  private token: string;
  private userId: string;
  private role: string;
  private isUserAuthenticated: boolean = false;
  public authStatus = new Subject<boolean>();
  public tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public afAuth: AngularFireAuth,
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
    return this.httpClient.post(this.API_user + '/signup', user)
  }

  // login
  logIn(email: string, password: string) {
    const User = {
      email: email,
      password: password,
    }
    this.httpClient.post<{token: string, expiresIn: number, userId: string, role: string, msg: string}>(this.API_user + '/login', User).subscribe((result) => {
      this.token = result.token;
      this.role = result.role;
      if(this.token){
        const expiresInDuration = result.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.userId = result.userId;
        this.authStatus.next(true);
        this.isUserAuthenticated = true;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(this.token, expirationDate, this.userId, this.role);
      }
      Swal.fire({
        icon: 'success',
        title: result.msg,
        showConfirmButton: true,
        timer: 1500
      })
      setTimeout(() =>{
        this.router.navigate(['/'])
      }, 2000)
    },
    (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
        showConfirmButton: true,
        timer: 1500
      })
    })
  }

  // login with google
  async loginWithGoogle(){
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const User = await this.afAuth.signInWithPopup(googleProvider);
    const new_User = {
      name: User.user?.displayName,
      email: User.user?.email,
      reg_date: this.today,
      role: 'Member',
      member_rankpoints: 0,
    }
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
    console.log('setting time: ' + duration)
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