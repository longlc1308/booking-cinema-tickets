import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  public signInForm: FormGroup;
  public signUpForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
  ) {
   }

  ngOnInit(): void {
    const login = document.querySelector('.login-text');
    const signup = document.querySelector('.signup-text');
    signup?.addEventListener('click',() => {
      login?.classList.remove("active")
      signup?.classList.add("active")
    });
    login?.addEventListener('click',() => {
      login?.classList.add("active")
      signup?.classList.remove("active")
    });

    // signin form
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // signup form
    this.signUpForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      area: ['HN', [Validators.required]],
    });
  }

  toggleForm(): void {
    const formWrapper = document.querySelector('.form-box');
    formWrapper?.classList.toggle('active');
  }

  onSignIn(){
  console.log('Hello')
  }

  onSignUp(){
  console.log('Hello world')
  }

}
