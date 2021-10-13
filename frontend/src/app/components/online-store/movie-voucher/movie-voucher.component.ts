import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-voucher',
  templateUrl: './movie-voucher.component.html',
  styleUrls: ['./movie-voucher.component.css']
})
export class MovieVoucherComponent implements OnInit {
  vouchers = [
    { name: 'Voucher 2D', price: '105.000đ', description: 'Có giá trị đổi vé xem phim 2D', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/t/i/ticket_voucher_2_.png'},
    { name: 'Voucher 3D', price: '135.000đ', description: 'Có giá trị đổi vé xem phim 3D', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/t/i/ticket_voucher_2_.png'},
    { name: 'Voucher IMAX', price: '180.000đ', description: 'Có giá trị đổi vé xem phim IMAX 2D/3D', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/s/p/special_cinema-02-cropped.jpg'},
    { name: 'Voucher 4DX', price: '180.000đ', description: 'Có giá trị đổi vé xem phim 4DX 2D/3D', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/s/p/special_cinema-03-cropped.jpg'},
    { name: 'Voucher Gold Class', price: '250.000đ', description: 'Có giá trị đổi vé xem phim rạp Gold Class', imgLink: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/s/p/special_cinema-04-cropped.jpg'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
