import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  showValidate: boolean = false;
  public ResetForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ResetForm = this._formBuilder.group({
      new_pw: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      confirm_pw: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    });
  }

  onReset(){
    const token = this._activatedRoute.snapshot.params.token;
    if(this.ResetForm.invalid){
      this.showValidate = true;
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
      })
    }
    else if (this.ResetForm.value.new_pw !== this.ResetForm.value.confirm_pw) {
      Swal.fire({
        icon: 'error',
        title: 'Mật khẩu không trùng khớp',
      })
    }
    else{
      this.authService.resetPassword(token, this.ResetForm.value.new_pw).subscribe((data)=>{
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
