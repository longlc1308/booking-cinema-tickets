import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private today = new Date();
  private readonly API_user = environment.api_url + '/users';
  private token:string;
  private userId: string;
  private role: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

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

  logIn(email: string, password: string) {
    const User = {
      email: email,
      password: password,
    }
    this.httpClient.post<{token: string, expiresIn: number, userId: string, role: string}>(this.API_user + '/login', User).subscribe((result) => {

    })
  }


  private saveAuthData(token: string, expirationDate: Date, userId: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', role);
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


  /* Error */
  handleError(err) {
    if(err.error instanceof Error) {
      console.log(`${err.message}`);
    }
    else{
      console.log(`${err.status} + ${err.message}`);
    }
  }
}
