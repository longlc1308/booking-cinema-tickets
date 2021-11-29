import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public updateForm: FormGroup;
  public changeForm: FormGroup;
  private userId: any;
  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.updateForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[[a-zA-Z]{2,}')]],
      phone: ['', [Validators.required]],
      email: [{value: '', disabled: true}, [Validators.required]],
      gender: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      area: ['', [Validators.required]],
      member_rankpoints: [{value: '', disabled: true}, [Validators.required]],
    });

    this.changeForm = this._formBuilder.group({
      new_pw: ['', [Validators.required]],
      confirm_pw: ['', [Validators.required]],
    });

    this.userId = this.authService.getUserId();
    this.authService.getAuthId().subscribe(userId => {
      this.userId = userId;
      console.log(this.userId);
    })
    this.loadData();
  }

  loadData() {
    this.userService.fetchUserDetails(this.userId).subscribe((data) => {
      console.log(data);
      this.updateForm.patchValue({
        name: data['name'],
        phone: data['phone'],
        email: data['email'],
        gender: data['gender'],
        birthday: this.formatDate(data['date_of_birth']),
        area: data['area'],
        member_rankpoints: data['member_rankpoints'],
      })
    },
    error => {
      this.authService.handleError(error);
    })
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onUpdate(){
    if(this.updateForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
      })
    }
    else{
      this.authService.updateUserInfo(this.userId,
        this.updateForm.value.name,
        this.updateForm.value.phone,
        this.updateForm.value.gender,
        this.updateForm.value.birthday,
        this.updateForm.value.area).subscribe((result) => {
          Swal.fire({
            icon: 'success',
            title: result.msg,
            showConfirmButton: false,
            timer: 1500
          })
        },(error) => {
          Swal.fire({
            icon: 'error',
            title: error.error.msg,
            showConfirmButton: true,
            timer: 1500
          })
        })
    }
  }

  onChange(){

  }
}
