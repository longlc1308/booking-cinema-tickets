import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  showValidate: boolean = false;
  public EmailForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.EmailForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[[a-zA-Z]{2,}')]],
    });
  }

  onSend(){
    if(this.EmailForm.invalid){
      this.showValidate = true;
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
      })
    }
    else{
      this.authService.forgotPassword(this.EmailForm.value.email).subscribe((data)=>{
        Swal.fire({
          icon: 'success',
          title: data.msg,
          showConfirmButton: true,
          timer: 1500
        })
      }, (error)=>{
        Swal.fire({
          icon: 'error',
          title: error.error.msg,
          timer: 1500
        })
      })
    }
  }

}
