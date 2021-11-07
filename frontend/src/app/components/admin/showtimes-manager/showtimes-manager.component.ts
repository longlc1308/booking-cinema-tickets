import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-showtimes-manager',
  templateUrl: './showtimes-manager.component.html',
  styleUrls: ['./showtimes-manager.component.css']
})
export class ShowtimesManagerComponent implements OnInit {
  public showTimeForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.showTimeForm = this._formBuilder.group({
      movieName: ['', [Validators.required]],
      siteName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  onAdd(){
  }

}
