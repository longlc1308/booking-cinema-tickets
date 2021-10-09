import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  cgv_city: Array<string>;
  oldId: string = 'city_1';

  cinemasList = [
    ['CGV Crescent Mall', 'CGV Hùng Vương Plaza', 'CGV Pearl Plaza'],
    ['CGV Vincom Center Bà Triệu', 'CGV Vincom Royal City', 'CGV Hồ Gươm Plaza']
  ];
  contents = [
    `<div class="theater-container product-view">
    <div class="heater-head">
      <div class="home-title"><h3>Rạp</h3></div>
      <div class="page-title theater-title"><h3>CGV Vincom Center Bà Triệu</h3></div>
    </div>
    
    <div class="theater-gallery">
                
                  <div class="theater-thumb-image">
          <div class="slideshow-theater slideshow-container">
            <ul class="slideshow" style="overflow: hidden;"><li class="cycle-slide cycle-sentinel" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                <img src="https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/b/t/bth_3355_2.jpg" style="visibility: hidden;">	
              </li>
                                    
              
                                    
              
                                    
              
                                    
              
                                    
              
                              <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 96; opacity: 1; display: block; visibility: hidden;">
                <img src="https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/b/t/bth_3355_2.jpg">	
              </li><li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 95; visibility: hidden; opacity: 1; display: block;">
                <img src="https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/b/t/bth_3314.jpg">	
              </li><li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 95; visibility: hidden; opacity: 1; display: block;">
                <img src="https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_tra_vinh_v1_170304_15.jpg">	
              </li><li class="cycle-slide cycle-slide-active" style="position: absolute; top: 0px; left: 0px; z-index: 99; visibility: visible; opacity: 1; display: block;">
                <img src="https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_tra_vinh_v2_170304_15.jpg">	
              </li><li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 97; visibility: hidden; opacity: 1; display: block;">
                <img src="https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_tra_vinh_v3_170304_15.jpg">	
              </li></ul>
            <span class="slideshow-prev">&nbsp;</span>
            <span class="slideshow-next">&nbsp;</span>
          </div>
        </div>	
        
        <div class="theater-infomation">
          <div class="left-info-theater">
            <div class="theater-left-content">
              <div class="theater-address">Tầng 6, Toà nhà VinCom Center Hà Nội 191 đường Bà Triệu Quận Hai Bà Trưng Hà Nội</div>
              <div class="fax"><label>Fax : </label><div class="fax-input" style="display: inline;"> +84 4 6 275 5240</div></div>
              <div class="hotline"><label>Hotline : </label><div class="fax-input" style="display: inline;"> 1900 6017</div></div>
            </div>
          </div>
          
          <div class="right-info-theater">
            <div class="theater-right-content">
              <div class="location">
                <a class="iframe cboxElement" title="CGV Vincom Center Bà Triệu" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.995822806579!2d105.84872864758232!3d21.0127543154845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc63d40303535e19c!2sR%E1%BA%A1p+chi%E1%BA%BFu+phim+CGV+Vincom+Center+Ba+Trieu!5e0!3m2!1svi!2svn!4v1407575740830">Xem bản đồ</a>
              </div>
              <div class="contact-us"><a class="cotact-us-link" href="https://www.cgv.vn/default/contacts/">Liên hệ CGV</a></div>
            </div>
          </div>
        </div>
              </div>
    
    <div class="product-collateral toggle-content tabs tabs-format-cgv">
      <ul class="toggle-tabs"><li class="current"><span>Lịch chiếu</span></li><li class="last"><span>Giá vé</span></li></ul><dl id="collateral-tabs" class="collateral-tabs">
        <dt class="tab current"><span>Lịch chiếu</span></dt>
        <dd class="tab-container current">
          <div class="tab-content">
                              <p>No schedules available !</p>
                          </div>
        </dd>
        
        <dt class="tab last"><span>Giá vé</span></dt>
        <dd class="tab-container last">
          <div class="tab-content">
            <div class="information-ticket-new">
<div class="u22-price">
<h3 style="
background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/cgv-u22-vn.png);
">u22</h3>
</div>
<div class="box-table-price">
<div class="title-table-price">
<h2>BẢNG GIÁ VÉ</h2>
</div>
<table border="1">
<tbody>
<tr class="title-day">
<td>
<p>Từ thứ hai đến thứ sáu</p>
</td>
<td colspan="3">
<p>thứ hai, thứ ba, thứ năm</p>
</td>
<td rowspan="2">
<p>thứ tư vui vẻ</p>
</td>
<td colspan="3">
<p>thứ sáu, thứ bảy,chủ nhật và ngày lễ</p>
</td>
</tr>
<tr>
<td class="w12-5">
<p>Thành Viên Từ 22 Tuổi Trở Xuống, Sở Hữu Thẻ U22, Tại Rạp</p>
</td>
<td class="w12-5">
<p>Người cao tuổi<br>học sinh, sinh viên</p>
</td>
<td class="w12-5">
<p>trẻ em</p>
</td>
<td class="w12-5">
<p>người lớn</p>
</td>
<td class="w12-5">
<p>trẻ em</p>
</td>
<td class="w12-5">
<p>học sinh, sinh viên (trước 17:00), người cao tuổi</p>
</td>
<td class="w12-5">
<p>người lớn</p>
</td>
</tr>
<tr class="value">
<td>65.000</td>
<td>90.000</td>
<td>80.000</td>
<td>105.000</td>
<td>95.000</td>
<td>90.000</td>
<td>100.000</td>
<td>125.000</td>
</tr>
<tr class="sur">
<td colspan="8">
<p class="title-surcharge"><strong>PHỤ THU:</strong></p>
<ul class="price-sub-table">
<li class="sub-charge">
<p>Ghế VIP:</p>
+5.000 ( Miễn phụ thu cho U22 )</li>
<li class="sub-charge">
<p>Sweetbox :</p>
<ul>
<li>+25.000 (Thứ Hai, Thứ Ba, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật )</li>
<li>+15.000 (Thứ Tư )</li>
</ul>
</li>
<li class="sub-charge">
<p>3D :</p>
<ul>
<li>+30.000 (Thứ Hai, Thứ Ba, Thứ Năm)</li>
<li>+50.000 (Thứ Sáu, Thứ Bảy, Chủ Nhật và Ngày Lễ )</li>
</ul>
</li>
<li class="sub-charge">
<p>Lễ/Tết :</p>
<ul>
<li>+10.000</li>
</ul>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>

<div class="box-table-price">
<div class="title-table-price">
<h2>BẢNG GIÁ VÉ 4DX</h2>
</div>
<table border="1">
<tbody>
  <tr class="title-day">
    <td class="w9" rowspan="2">&nbsp;</td>
    <td class="w9" rowspan="2">
      <p>U22</p>
    </td>			
    <td class="w36" colspan="4">
      <p>thứ hai, thứ ba, thứ năm</p>
    </td>
      <td class="w9" colspan="2">
    <p>thứ tư<br> vui vẻ</p>
      </td>
    <td class="w36" colspan="4">
      <p>thứ sáu, thứ bảy,<br> chủ nhật và ngày lễ</p>
    </td>
  </tr>
  <tr class="title-time">
    <td class="w9">
      <p>trước<br> 12:00</p>
    </td>
    <td class="w9">
      <p>từ<br> 12:00 - 17:00</p>
      
    </td>
    <td class="w9">
      <p>từ<br> 17:00 - 21:30<br>&amp; suất chiếu đặc biệt (Sneak Show)</p>
    </td>
    <td class="w9">
      <p>sau<br> 21:30</p>
    </td>
    <td class="w9">
      <p>Suất chiếu  thường</p>
    </td>
    <td class="w9">
      <p>Suất chiếu đặc biệt (Sneak Show)</p>
    </td>
    <td class="w9">
      <p>trước<br> 12:00</p>
    </td>
    <td class="w9">
      <p>từ<br> 12:00 - 17:00</p>
    </td>
    <td class="w9">
      <p>từ<br> 17:00 - 21:30<br>&amp; suất chiếu đặc biệt (Sneak Show)</p>
    </td>
    <td class="w9">
      <p>sau<br> 21:30</p>
    </td>
  </tr>
  <tr class="value-1">
    <td class="text">
      <p style="font-size: 12px;">phim 3D</p>
    </td>
    <td>
      <p>160.000</p>
    </td>
    <td>
      <p>160.000</p>
    </td>
    <td>
      <p>190.000</p>
    </td>
    <td>
      <p>210.000</p>
    </td>
    <td>
      <p>190.000</p>
    </td>
    <td>
      <p>170.000</p>
    </td>
    <td>
      <p>210.000</p>
    </td>
    <td>
      <p>180.000</p>
    </td>
    <td>
      <p>210.000</p>
    </td>
    <td>
      <p>270.000</p>
    </td>
    <td>
      <p>210.000</p>
    </td>
  </tr>
  <tr class="value-1">
    <td class="text">
      <p style="font-size: 12px;">phim 2D</p>
    </td>
    <td>
      <p>140.000</p>
    </td>
    <td>
      <p>150.000</p>
    </td>
    <td>
      <p>160.000</p>
    </td>
    <td>
      <p>180.000</p>
    </td>
    <td>
      <p>160.000</p>
    </td>
    <td>
      <p>150.000</p>
    </td>
    <td>
      <p>180.000</p>
    </td>
    <td>
      <p>170.000</p>
    </td>
    <td>
      <p>180.000</p>
    </td>
    <td>
      <p>200.000</p>
    </td>
    <td>
      <p>180.000</p>
    </td>
  </tr>
</tbody>
</table>
</div>


<div class="notice-info-ticket">
<h3><strong>Lưu ý :</strong></h3>
<ul>
<li>- Vui lòng xuất trình thẻ thành viên CGV trước khi mua vé để được tích điểm.</li>
<li>- Giá vé khi đặt vé trực tuyến trên website và ứng dụng CGV là giá vé người lớn. Các loại vé như học sinh-sinh viên, vé trẻ em, vé người cao tuổi, vé U22 vui lòng mua trực tiếp tại quầy.</li>
<li>- Vé trẻ em chỉ xuất khi có sự hiện diện của trẻ dưới 1m3 và trên 2 tuổi.</li>
<li>- Vé người cao tuổi chỉ dành cho khách hàng từ 55 tuổi trở lên. Vui lòng xuất trình CMND khi mua vé.</li>
<li>- Vui lòng xuất trình thẻ học sinh-sinh viên để mua vé ưu đãi.</li>
<li>- Xin lưu ý bãi đỗ xe của tòa nhà có thể hết chỗ trong giờ cao điểm từ 18:30 đến 21:00 thứ 7 &amp; Chủ nhật.</li>
</ul>
</div>
</div>							</div>
        </dd>
      </dl>					
    </div>
  </div>`
  ]
  constructor() {
    this.cgv_city = this.cinemasList[0];
   }

  ngOnInit(): void {
  }
  selectRegion(id: string, index: number) {
    if(this.oldId){
      const btnUnactive = document.getElementById(this.oldId);
      btnUnactive.classList.remove("siteactive")
    }
    const btnActive = document.getElementById(id);
    btnActive.classList.add("siteactive");
    this.cgv_city = this.cinemasList[index];
    this.oldId = id;
  }

}
