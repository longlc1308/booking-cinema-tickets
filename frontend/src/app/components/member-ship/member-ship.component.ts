import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.css']
})
export class MemberShipComponent implements OnInit {

  contents = [
    `<div class="outer">
    <div class="inner">
    <div class="lyt-heading">CHƯƠNG TRÌNH ĐIỂM THƯỞNG</div>
    <div class="lyt-details-content">
    <p>Chương trình bao gồm 4 đối tượng thành viên <strong>U22 | CGV Member | CGV VIP và CGV VVIP</strong>, với những quyền lợi và mức ưu đãi khác nhau. Mỗi khi thực hiện giao dịch tại hệ thống rạp CGV, bạn sẽ nhận được một số điểm thưởng tương ứng với cấp độ thành viên:</p>
    <table border="0" style="width: 100%;">
    <tbody>
    <tr><th style="width: 31%;">Điểm thưởng</th><th style="width: 23%;">U22 | Member</th><th style="width: 23%;">VIP</th><th style="width: 23%;">VVIP</th></tr>
    <tr class="odd">
    <td><strong>Tại Quầy Vé</strong></td>
    <td><strong>5%</strong></td>
    <td><strong>7%</strong></td>
    <td><strong>10%</strong></td>
    </tr>
    <tr>
    <td>VD: 100.000 VND</td>
    <td>5 Điểm</td>
    <td>7 Điểm</td>
    <td>10 Điểm</td>
    </tr>
    <tr class="odd">
    <td><strong>Quầy Bắp Nước</strong></td>
    <td><strong>3%</strong></td>
    <td><strong>3%</strong></td>
    <td><strong>5%</strong></td>
    </tr>
    <tr>
    <td>VD: 100.000 VND</td>
    <td>3 Điểm</td>
    <td>3 Điểm</td>
    <td>5 Điểm</td>
    </tr>
    </tbody>
    </table>
    <p><strong>1 điểm = 1.000 VND</strong>, có giá trị như tiền mặt, được dùng để mua vé xem phim, thức uống hoặc combo tương ứng tại CGV. Ví dụ: Với giao dịch mua vé giá 100.000 VND bạn có thể:</p>
    <p>- Thanh toán 80.000 VND + 20 điểm thưởng</p>
    <p>- Thanh toán với 10.000 VND + 90 điểm thưởng</p>
    <p><strong>Cách làm tròn điểm thưởng:</strong></p>
    <p>- Từ 0.1 đến 0.4: làm tròn xuống (Ví dụ: 3.2 điểm sẽ được tích vào tài khoản 3 điểm)</p>
    <p>- Từ 0.5 đến 0.9: làm tròn lên (Ví dụ: 3.6 điểm sẽ được tích vào tài khoản 4 điểm)</p>
    <p><strong>Lưu ý:</strong></p>
    <p>1. Điểm thưởng có thời hạn sử dụng là 01 năm. Ví dụ: Điểm của bạn được nhận vào 0h00 ngày 01/01/2021 sẽ hết hạn sử dụng vào lúc 0h00 ngày 01/01/2022.</p>
    <p>2. Điểm thưởng có giá trị sử dụng tại tất cả các rạp CGV trên toàn quốc.</p>
    <p>3. Sau khi suất chiếu diễn ra, điểm thưởng sẽ được ghi nhận vào tài khoản của bạn vào 8:00 sáng ngày tiếp theo. Ví dụ: suất chiếu của bạn diễn ra vào ngày 02/01/2021, điểm thưởng sẽ được ghi nhận vào tài khoản của bạn vào 8:00 sáng ngày 03/01/2021.</p>
    <p>4. Bạn có thể dễ dàng kiểm tra điểm thưởng của mình trên CGV Website hoặc Ứng dụng CGV trên điện thoại (Mobile App).</p>
    <p>5. Điểm thưởng tối thiểu được sử dụng cho mỗi giao dịch là 20 điểm trở lên.</p>
    <p>6. Thành viên khi thanh toán trực tuyến trên Website/APP, trong 1 giao dịch, điểm thưởng chỉ được sử dụng thanh toán tối đa 90% giá trị đơn hàng.</p>
    </div>
    <!-- .lyt-details-content --></div>
    </div>
    `,
    `<div class="outer">
    <div class="inner">
    <div class="lyt-heading">QUÀ TẶNG SINH NHẬT</div>
    <div class="lyt-details-content">
    <p>Như một lời chúc ý nghĩa và chân thành, CGV xin dành tặng bạn một phần quà đặc biệt nhân dịp sinh nhật của mình:</p>
    <p>- <strong>Thành viên Thân Thiết &amp; U22</strong>: 01 CGV Combo (01 Bắp &amp; 02 Nước) miễn phí.</p>
    *Đặc biệt! Vào sinh nhật lần thứ 23, thành viên U22 sẽ nhận thêm 01 vé xem phim 2D/3D miễn phí.
    <p>- <strong>Thành viên VIP</strong>: 01 CGV Combo (01 Bắp &amp; 02 Nước) + 01 vé xem phim 2D/3D miễn phí.</p>
    <p>- <strong>Thành viên VVIP</strong>: 01 CGV Combo (01 Bắp &amp; 02 Nước) + 02 vé xem phim 2D/3D miễn phí.</p>
    <p><strong>Ghi chú: </strong></p>
    <p>1. Bạn sẽ nhận được phần quà sinh nhật trong tháng sinh nhật của mình. Ví dụ, bạn sinh vào tháng 1 thì thời gian bạn có thể nhận quà là từ 01/01/2021 đến 31/01/2021.</p>
    <p>2. Chỉ những thành viên có ít nhất 01 giao dịch trong vòng 12 tháng gần nhất (trước tháng sinh nhật) mới nhận được phần quà sinh nhật từ CGV. Nếu chưa thỏa điều kiện nhận quà, khách hàng có thể thực hiện giao dịch bổ sung và nhận quà sinh nhật sau 02 ngày với điều kiện thời điểm đó vẫn còn trong tháng sinh nhật.</p>
    <p>3. Phần quà sinh nhật không có giá trị quy đổi thành tiền mặt.</p>
    <p>4. Vui lòng xuất trình thẻ thành viên CGV và CMND khi đến nhận quà. Ngày sinh trên CMND của bạn phải trùng khớp với ngày sinh và số CMND đã đăng ký tài khoản CGV. Nếu tài khoản được đăng ký với ngày tháng năm sinh không chính xác hoặc tháng sinh đã qua, chương trình sẽ được áp dụng vào tháng sinh nhật của năm kế tiếp. Để thay đổi thông tin ngày sinh bạn có thể liên hệ với CGV qua email hoidap@cgv.vn để được hỗ trợ (Lưu ý: Mỗi tài khoản thành viên chỉ được cập nhật ngày tháng năm sinh tối đa 03 lần kể từ khi khởi tạo tài khoản).</p>
    <p>5. Thành viên mới sẽ bắt đầu được nhận quà sinh nhật sau 72 giờ kể từ ngày đăng ký thành viên &amp; có phát sinh giao dịch trước thời điểm nhận quà 02 ngày với điều kiện thời gian nhận quà vẫn còn trong tháng sinh nhật.</p>
    <p>6. CGV Combo miễn phí bao gồm 01 Bắp (vị ngọt hoặc mặn) &amp; 02 Nước ngọt lớn, chỉ áp dụng trực tiếp tại quầy. Khi có nhu cầu đổi vị, bạn vui lòng thanh toán thêm khoản phụ thu.</p>
    <p>7. Đối với khách hàng VVIP nhận được 02 vé 2D/3D, vui lòng thực hiện giao dịch mua 02 vé cùng một lúc (không áp dụng tách lẻ/tách giao dịch).</p>
    <p>8. Vé miễn phí là vé 2D/3D hàng ghế thường hoặc VIP tại phòng chiếu thường, không áp dụng cho 4DX, IMAX, GOLD GLASS, SWEETBOX, STARIUM, L’AMOUR, DOLBY ATMOS, PREMIUM, SCREENX, CINE &amp; FORÊT, CINE &amp; LIVING ROOM.</p>
    <p>9. Vé miễn phí được áp dụng cho tất cả các ngày trong tuần bao gồm Lễ/ Tết, không áp dụng cho các suất chiếu sớm Sneak Show &amp; Early Release.</p>
    <p>10. Việc quy đổi quà sinh nhật phụ thuộc vào số lượng hiện có tại rạp.</p>
    </div>
    </div>
    </div>`,
    `<div class="outer">
    <div class="inner">
    <div class="lyt-heading">CẤP ĐỘ THÀNH VIÊN</div>
    <div class="accordion" id="accordionExample" style="width: 537px;">
    <div class="card">
    <div class="card-header" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <h6 class="mb-0">
    <span>
    Thành viên U22
    </span>
    </h6>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body">
    <p>Thành viên U22 là thành viên trong độ tuổi từ 12 đến dưới 23 và nhận được các ưu đãi sau:</p>
    <p>-&nbsp;Giá vé ưu đãi 45.000 VND - 55.000VND/ vé 2D<sup>(*)</sup> cho tất cả các suất chiếu từ thứ 2 đến thứ 6 (Không áp dụng cho Lễ/ Tết, Sneakshow hoặc Early Release)</p>
    <p>- Giá ưu đãi cho combo bắp nước:</p>
    <p>+ My combo (01 nước vừa + 01 bắp vừa): 75.000 VND/ combo.</p>
    <p>+ CGV Combo (02 nước vừa + 01 bắp vừa): 89.000 VND/ combo.</p>
    <p>- 01 CGV Combo (01 bắp &amp; 02 nước) miễn phí vào tháng sinh nhật (tính từ ngày 1 đến ngày cuối cùng của tháng sinh nhật)</p>
    <p>- 01 vé 2D/3D miễn phí vào sinh nhật lần thứ 23.</p>
    <p>- Tích lũy điểm 5% giá trị giao dịch tại quầy vé và 3% giá trị giao dịch tại quầy bắp nước.</p>
    <p>- Giảm giá 10% các sản phẩm thức ăn nóng tại CGV.</p>
    <p>*Ghi chú:</p>
    <p>- Thức ăn nóng chỉ áp dụng tại một số rạp CGV trên toàn quốc.</p>
    <p>- Ưu đãi giảm giá thức ăn nóng chỉ được áp dụng tại quầy.</p>
    <p>- Chỉ áp dụng giảm giá tối đa 10 sản phẩm thức ăn nóng trong 1 giao dịch.</p>
    <p>(*)Tìm hiểu chi tiết <a href="https://www.cgv.vn/default/newsoffer/u22-vn/" target="_self"><em><strong>TẠI ĐÂY</strong></em></a></p>
    <p>Để nâng cao bảo mật tài khoản thành viên:</p>
    <p>- Khi mua vé tại quầy và sử dụng từ 500 điểm trở lên, vui lòng xuất trình CMND hoặc giấy tờ tùy thân của bạn để xác nhận chính chủ sở hữu tài khoản.</p>
    <p>- Khi mua vé online có dử dụng điểm, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập <a href="https://www.cgv.vn/default/newsoffer/thanh-toan-voi-ma-pin/" target="_self"><em><strong>TẠI ĐÂY </strong></em></a>.</p>
    </div>
    </div>
    </div>
    <div class="card">
    <div class="card-header" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <h6 class="mb-0">
    <span class="collapsed">
    Thành viên thân thiết (Member)
    </span>
    </h6>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div class="card-body">
    <p>Thành viên thân thiết là thành viên từ 23 tuổi trở lên và nhận được các ưu đãi sau:</p>
    <p>- 01 CGV Combo (01 bắp &amp; 02 nước) miễn phí vào tháng sinh nhật.</p>
    <p>- Tích lũy điểm 5% giá trị giao dịch tại quầy vé và 3% giá trị giao dịch tại quầy bắp nước.</p>
    <p>- Giảm giá 10% các sản phẩm thức ăn nóng tại CGV.</p>
    <p>- Cơ hội tham gia những chương trình đặc biệt khác chỉ áp dụng cho thành viên CGV.</p>
    <p>*Ghi chú:</p>
    <p>- Thức ăn nóng chỉ áp dụng tại một số rạp CGV trên toàn quốc.</p>
    <p>- Ưu đãi giảm giá thức ăn nóng chỉ được áp dụng tại quầy.</p>
    <p>- Chỉ áp dụng giảm giá tối đa 10 sản phẩm thức ăn nóng trong 1 giao dịch.</p>
    <p>Để nâng cao bảo mật tài khoản thành viên:</p>
    <p>- Khi mua vé tại quầy và sử dụng từ 500 điểm trở lên, vui lòng xuất trình CMND hoặc giấy tờ tùy thân của bạn để xác nhận chính chủ sở hữu tài khoản.</p>
    <p>- Khi mua vé online có dử dụng điểm, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập <a href="https://www.cgv.vn/default/newsoffer/thanh-toan-voi-ma-pin/" target="_self"><em><strong>TẠI ĐÂY </strong></em></a>.</p>
    </div>
    </div>
    </div>
    <div class="card">
    <div class="card-header" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <h6 class="mb-0">
    <span class="collapsed">
    Thành viên vip 2021
    </span>
    </h6>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div class="card-body">
    <p>Thành viên VIP 2021 là thành viên có tổng chi tiêu trong 15 tháng (từ 01/01/2020 đến 31/03/2021) từ 2.500.000 VND đến 4.999.999 VND và nhận được các ưu đãi đặc biệt sau:</p>
    <p>- 08 vé 2D/3D miễn phí áp dụng tất cả các ngày trong tuần.</p>
    <p>- 01 CGV Combo (01 bắp &amp; 02 nước) và 01 vé xem phim 2D/3D trong tháng sinh nhật.</p>
    <p>- Tích lũy điểm 7% giá trị giao dịch tại quầy vé và 3% giá trị giao dịch tại quầy bắp nước.</p>
    <p>- Giảm giá 15% các sản phẩm thức ăn nóng tại CGV.</p>
    <p>- Cơ hội tham gia những chương trình đặc biệt khác chỉ áp dụng cho thành viên VIP.</p>
    <p><strong>Ghi chú:</strong></p>
    <p>- Cấp độ thành viên VIP và các ưu đãi kèm theo chỉ có giá trị đến hết 31/12/2021.</p>
    <p>- Khách hàng tận hưởng ưu đãi tại các rạp CGV trên toàn quốc.</p>
    <p>- Để tận hưởng các ưu đãi, bạn chỉ cần xuất trình thẻ thành viên điện tử VIP (trên ứng dụng/APP) và yêu cầu áp dụng ưu đãi tại quầy vé khi giao dịch, hoặc chọn hình thức giảm giá coupon khi thanh toán trên website hoặc ứng dụng CGV.</p>
    <p>- Các ưu đãi vé xem phim 2D/3D không áp dụng tại các rạp chiếu phim đặc biệt: 4DX, IMAX, GOLD CLASS, SWEETBOX, STARIUM, L’AMOUR, DOLBY ATMOS, PREMIUM, SCREENX, CINE &amp; FORÊT, CINE &amp; LIVING ROOM, cũng như Suất Chiếu Sớm và Suất Chiếu Đặc Biệt.</p>
    <p>- Các ưu đãi vé xem phim 2D/3D không được áp dụng cho các ngày Lễ, Tết, ngoại trừ vé 2D/3D trong tháng sinh nhật.</p>
    <p>- Vì cấp độ thành viên mỗi năm được xét duyệt dựa trên tổng chi tiêu nên tổng chi tiêu tích lũy trong năm 2020 của bạn sẽ trở về 0 vào ngày 01/01/2021.</p>
    <p>*Ưu đãi giảm giá thức ăn nóng:</p>
    <p>- Thức ăn nóng chỉ áp dụng tại một số rạp CGV trên toàn quốc.</p>
    <p>- Ưu đãi giảm giá thức ăn nóng chỉ được áp dụng tại quầy.</p>
    <p>- Chỉ áp dụng giảm giá tối đa 10 sản phẩm thức ăn nóng trong 1 giao dịch.</p>
    <p>Để nâng cao bảo mật tài khoản thành viên:</p>
    <p>- Khi mua vé tại quầy và sử dụng từ 500 điểm trở lên, vui lòng xuất trình CMND hoặc giấy tờ tùy thân của bạn để xác nhận chính chủ sở hữu tài khoản.</p>
    <p>- Khi mua vé online có dử dụng điểm, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập <a href="https://www.cgv.vn/default/newsoffer/thanh-toan-voi-ma-pin/" target="_self"><em><strong>TẠI ĐÂY </strong></em></a>.</p>
    </div>
    </div>
    </div>
    <div class="card">
    <div class="card-header" id="headingFour" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    <h6 class="mb-0">
    <span class="collapsed">
    Thành viên vvip 2021
    </span>
    </h6>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
    <div class="card-body">
    <p>Thành viên VVIP 2021 là thành viên có tổng chi tiêu trong 15 tháng (từ 01/01/2020 đến 31/03/2021) 5.000.000 VND trở lên. Vì là thành viên ở cấp độ cao nhất, bạn sẽ được tận hưởng những đặc quyền sau:</p>
    <p>- 01 phần quà VVIP đặc biệt. Thời gian nhận quà VVIP 2021 sẽ được thông báo sớm nhất trong tháng 08/2021.</p>
    <p>- 10 vé 2D/3D miễn phí áp dụng tất cả các ngày trong tuần.</p>
    <p>- 01 CGV Combo (01 bắp &amp; 02 nước) và 02 vé xem phim 2D/3D miễn phí trong tháng sinh nhật. Tích lũy điểm 10% giá trị giao dịch tại quầy vé và 5% giá trị giao dịch tại quầy bắp nước. Giảm giá 20% các sản phẩm thức ăn nóng tại CGV.</p>
    <p><strong>Ghi chú:</strong></p>
    <p>- Cấp độ thành viên VIP và các ưu đãi kèm theo chỉ có giá trị đến hết 31/12/2021.</p>
    <p>- Để tận hưởng các quyền lợi, bạn chỉ cần xuất trình thẻ thành viên điện tử VVIP (trên ứng dụng/APP) và yêu cầu áp dụng ưu đãi tại quầy vé khi giao dịch, hoặc chọn hình thức giảm giá coupon khi thanh toán trên website hoặc ứng dụng CGV.</p>
    <p>- Các ưu đãi vé xem phim 2D/3D không áp dụng tại các rạp chiếu phim đặc biệt: 4DX, IMAX, GOLD CLASS, SWEETBOX, STARIUM, L’AMOUR, DOLBY ATMOS, PREMIUM, SCREENX, CINE &amp; FORÊT, CINE &amp; LIVING ROOM, cũng như Suất Chiếu Sớm và Suất Chiếu Đặc Biệt.</p>
    <p>- Các ưu đãi vé xem phim 2D/3D không được áp dụng cho các ngày lễ, Tết, ngoại trừ vé 2D/3D trong tháng sinh nhật</p>
    <p>*Ưu đãi giảm giá thức ăn nóng:</p>
    <p>- Thức ăn nóng chỉ áp dụng tại một số rạp CGV trên toàn quốc.</p>
    <p>- Ưu đãi giảm giá thức ăn nóng chỉ được áp dụng tại quầy.</p>
    <p>- Chỉ áp dụng giảm giá tối đa 10 sản phẩm thức ăn nóng trong 1 giao dịch.</p>
    <p>Để nâng cao bảo mật tài khoản thành viên:</p>
    <p>- Khi mua vé tại quầy và sử dụng từ 500 điểm trở lên, vui lòng xuất trình CMND hoặc giấy tờ tùy thân của bạn để xác nhận chính chủ sở hữu tài khoản.</p>
    <p>- Khi mua vé online có dử dụng điểm, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập <a href="https://www.cgv.vn/default/newsoffer/thanh-toan-voi-ma-pin/" target="_self"><em><strong>TẠI ĐÂY </strong></em></a>.</p>
    <p></p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`,
    `<div class="outer">
    <div class="inner">
    <div class="lyt-heading">QUẢN LÝ TÀI KHOẢN</div>
    <div class="lyt-details-content">
    <p>Đăng nhập vào Tài Khoản CGV, bạn có thể dễ dàng quản lý tài khoản thành viên của mình như:</p>
    <p>- Kiểm tra và chỉnh sửa thông tin tài khoản.</p>
    <p>- Tra cứu điểm thưởng, tổng chi tiêu và lịch sử giao dịch.</p>
    <p>- Kiểm tra thẻ quà tặng, voucher hoặc coupon hiện có trong tài khoản thành viên.</p>
    <p>Mỗi tuần, các thành viên sẽ nhận được Bản tin điện ảnh CGV qua email, cập nhật những tin tức mới nhất về phim ảnh, sự kiện và khuyến mãi. Cập nhật ngay email, điện thoại và địa chỉ của bạn để luôn nhận được những thông báo mới nhất từ CGV!</p>
    </div>
    </div>
    <!-- .lyt-details-content --></div>`,
    `<div class="outer">
    <div class="inner">
    <div class="lyt-heading">BẠN CẦN HỖ TRỢ</div>
    <div class="lyt-details-content">
    <p>Với những ưu đãi hấp dẫn từ chương trình thành viên, CGV hy vọng sẽ mang đến cho bạn những trải nghiệm vượt xa điện ảnh.</p>
    <p>Mọi thắc mắc về chương trình thành viên bạn có thể liên hệ ngay Bộ phận hỗ trợ khách hàng của chúng tôi qua email hoidap@cgv.vn hoặc hotline 1900 6017 (8:00 – 22:00, từ thứ Hai đến Chủ Nhật - bao gồm các ngày Lễ, Tết).</p>
    <p>Cảm ơn bạn đã luôn đồng hành cùng CGV!</p>
    </div>
    </div>
    </div>`
  ]

  selected_program: string;
  oldId: string = "0";
  constructor() {
    this.selected_program = this.contents[0];
  }

  ngOnInit(): void {
  }

  selectProgram(id: string, index: number) {
    if(this.oldId){
      const btnUnactive = document.getElementById(this.oldId);
      btnUnactive.classList.remove("active")
    }
    const btnActive = document.getElementById(id);
    btnActive.classList.add("active");
    this.selected_program = this.contents[index];
    this.oldId = id;
  }

}
