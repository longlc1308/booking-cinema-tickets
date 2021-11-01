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
  showValidateSignIn: boolean = false;
  showValidateSignUp: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
  ) {}

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
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[[a-zA-Z]{2,}')]],
      password: ['', [Validators.required]],
    });

    // signup form
    this.signUpForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      area: ['HN', [Validators.required]],
      acceptTerms: ['', [Validators.required]],
    });
  }

  toggleForm(): void {
    const formWrapper = document.querySelector('.form-box');
    formWrapper?.classList.toggle('active');
  }

  onSignIn(){
    if(this.signInForm.invalid){
      this.showValidateSignIn = true;
    }
  }

  onSignUp(){
    if(this.signUpForm.invalid){
      this.showValidateSignUp = true;
    }
  }

}
