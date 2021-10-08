import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.css']
})
export class GiftcardComponent implements OnInit {
  gifts = [
    { name: 'Thẻ quà tặng - 300.000đ', price: '300.000đ', description: 'Có giá trị như tiền mặt', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/g/i/gift_card_-_cinox_1.png'},
    { name: 'Thẻ quà tặng - 500.000đ', price: '500.000đ', description: 'Có giá trị như tiền mặt', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/g/i/gift_card_-_cinox_1.png'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
