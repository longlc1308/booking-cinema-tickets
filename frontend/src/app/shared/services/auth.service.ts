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
  private token: string;
  private userId: string;
  private role: string;
  private userName: string;
  private isUserAuthenticated: boolean = false;
  public authStatus = new Subject<boolean>();
  public tokenTimer: any;
  private authId = new Subject<string>();
  private authName = new Subject<string>();
  private authRole = new Subject<string>();

  private readonly API_user = environment.api_url + '/user';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public afAuth: AngularFireAuth,
  ) { }

  getIsAuth(){
    return this.isUserAuthenticated;
  }

  getAuthStatus(){
    return this.authStatus.asObservable();
  }

  getUserId(){
    return this.userId;
  }

  getAuthId(){
    return this.authId.asObservable();
  }

  getUserName(){
    return this.userName;
  }

  getAuthName(){
    return this.authName.asObservable();
  }

  getRoleGuard() {
    const role = localStorage.getItem('role');
    return role
  }

  getAuthRole(){
    return this.authRole.asObservable();
  }

  // signup
  createUser(name: string, phone: string, email: string, password: string, birthday: Date, gender: string, area: string) {
    const user: User = {
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
    return this.httpClient.post<{msg: string}>(this.API_user + '/signup', user)
  }

  // login
  logIn(email: string, password: string) {
    const User = {
      email: email,
      password: password,
    }
    this.httpClient.post<{userName: string,token: string, expiresIn: number, userId: string, role: string, msg: string}>(this.API_user + '/login', User).subscribe((result) => {
      this.token = result.token;
      this.role = result.role;
      if(this.token){
        const expiresInDuration = result.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.userId = result.userId;
        this.authId.next(this.userId);
        this.userName = result.userName;
        this.authName.next(this.userName);
        this.authRole.next(this.role)
        this.authStatus.next(true);
        this.isUserAuthenticated = true;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(this.token, expirationDate, this.userId, this.role, this.userName);
      }
      Swal.fire({
        icon: 'success',
        title: result.msg,
        showConfirmButton: true,
        timer: 1500
      })
      setTimeout(() =>{
        this.router.navigateByUrl('/');
      }, 2000)
    },
    (err) => {
      Swal.fire({
        icon: 'error',
        title: err.error.msg,
        text: 'Vui l??ng ki???m tra l???i th??ng tin!',
        showConfirmButton: true,
        timer: 1500
      })
    })
  }

  //update user data
  updateUserInfo(id: string, name: string, phone: string, gender: string, birthday: Date, area: string) {
    const updateUserData = {
      id: id,
      name: name,
      phone: phone,
      gender: gender,
      date_of_birth: birthday,
      area: area,
    }
    return this.httpClient.put<{msg: string}>(this.API_user + '/update-user/' + id, updateUserData)
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

  // forgot password
  forgotPassword(email: string){
    const Email = {
      email: email,
    }
    return this.httpClient.put<{msg: string}>(this.API_user + '/forgot-password', Email)
  }

  // reset password
  resetPassword(token: string, new_pw: string){
    const password = {
      new_password: new_pw,
    }
    return this.httpClient.put<{msg: string}>(this.API_user + '/reset-password/' + token, password)
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.userName = authInformation.userName;
      this.userId = authInformation.userId;
      this.token = authInformation.token;
      this.isUserAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatus.next(true);
    }
  }
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logOut()
    }, duration * 1000)
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, role: string, userName: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString())
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', role);
    localStorage.setItem('userName', userName);
  }

  private getAuthData() {
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate')
    if (!token || !expirationDate) {
      return;
    }
    return {
      userName: userName,
      userId: userId,
      role: role,
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userName');
  }

  logOut() {
    this.userName = null;
    this.userId = null;
    this.token = null;
    this.isUserAuthenticated = false;
    this.authStatus.next(false);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
    Swal.fire({
      icon: 'success',
      title: 'B???n ???? ????ng xu???t',
      timer: 500
    })
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000)
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
