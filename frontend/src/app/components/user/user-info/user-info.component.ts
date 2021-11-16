import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public updateForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
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
  }

  onUpdate(){

  }
}
