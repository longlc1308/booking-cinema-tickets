import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OnlineStoreComponent } from './online-store.component';
import { MovieVoucherComponent } from './movie-voucher/movie-voucher.component';
import { GiftcardComponent } from './giftcard/giftcard.component';

const eStoreRouters : Routes = [
  { path: '', component: OnlineStoreComponent, children: [
    { path: 'movie-voucher', component: MovieVoucherComponent },
    { path: 'gift-card', component: GiftcardComponent },
    { path: '', redirectTo: 'movie-voucher', pathMatch:'full' }
  ]}
]

@NgModule({
  declarations: [
    OnlineStoreComponent,
    MovieVoucherComponent,
    GiftcardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(eStoreRouters)
  ]
})

export class eStoreModule {}
