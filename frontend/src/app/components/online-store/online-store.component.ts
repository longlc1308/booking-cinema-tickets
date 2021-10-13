import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html',
  styleUrls: ['./online-store.component.css']
})
export class OnlineStoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const VoucherBtn = document.querySelector('.voucher');
    const GiftBtn = document.querySelector('.giftcard');
    GiftBtn.addEventListener('click', () => {
      VoucherBtn.classList.remove("active");
      GiftBtn.classList.add("active");
    });
    VoucherBtn.addEventListener('click', () => {
      GiftBtn.classList.remove("active");
      VoucherBtn.classList.add("active");
    })
  }

}
