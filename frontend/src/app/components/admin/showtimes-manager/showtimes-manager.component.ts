import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showtimes-manager',
  templateUrl: './showtimes-manager.component.html',
  styleUrls: ['./showtimes-manager.component.css']
})
export class ShowtimesManagerComponent implements OnInit {
  public showTimeForm: FormGroup;
  showValidateSignIn: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.showTimeForm = this._formBuilder.group({
      movieName: [null, [Validators.required]],
      siteName: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  onAdd(){
    if(this.showTimeForm.invalid){
      this.showValidateSignIn = true;
      Swal.fire({
        icon: 'error',
        title: 'Không hợp lệ',
        text: 'Vui lòng kiểm tra lại thông tin!',
      })
      return
    }
    console.log('up thanh cong')
  }

}
