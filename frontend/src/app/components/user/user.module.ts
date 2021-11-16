import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserBookingComponent } from './user-booking/user-booking.component';

const userRouters : Routes = [
 {path: '', component: UserComponent, children: [
   { path: 'info', component: UserInfoComponent },
   { path: 'booking-history', component: UserBookingComponent },
   { path: '', redirectTo: 'info', pathMatch: 'full' },
   { path: '**', redirectTo: 'info', pathMatch: 'full' },
 ]},
]

@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent,
    UserBookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRouters)
  ]
})

export class UserModule {}
