import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-sale',
  templateUrl: './group-sale.component.html',
  styleUrls: ['./group-sale.component.css']
})
export class GroupSaleComponent implements OnInit {
  oldId: string = "0";
  selected_program: string;
  contents = [
    `<div class="lyt-history-content ui-tabs-panel ui-widget-content ui-corner-bottom" id="group-sale-field-trip" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true">
    <div class="outer">
    <div class="inner">
    <div class="lyt-details-contents">
    <div class="text-service-group-sale">
    <p><strong>Học mà chơi tại rạp chiếu phim</strong></p>
    <p>Gửi lời đến những thầy cô giáo đầy nhiệt huyết, bạn muốn áp dụng một phương pháp giảng dạy đột phá để tăng hưng phấn cho học sinh, hãy đăng ký ngay một lớp dã ngoại tại CGV để lưu lại những phút giây học đường khó quên nhé!</p>
    </div>
    <div class="image-detail-group-sale"><img alt="CGV Group Sale" src="https://www.cgv.vn/media/wysiwyg/group-sale/Education-01.jpg"></div>
    </div>
    </div>
    </div>
    </div>`,
    `<div class="lyt-history-content ui-tabs-panel ui-widget-content ui-corner-bottom" id="group-sale-celebration" aria-labelledby="ui-id-2" role="tabpanel" aria-expanded="false">
    <div class="outer">
    <div class="inner">
    <div class="lyt-details-contents">
    <div class="text-service-group-sale">
    <p><strong>Tiệc điện ảnh tại CGV!</strong></p>
    <p>Hãy để CGV giúp bạn tổ chức những buổi tiệc hay sự kiện đặc biệt! Bất kể là một buổi xem phim thân mật, hay một sự kiện, hay một buổi lễ cầu hôn, CGV là lựa chọn hàng đầu dành cho bạn. Cùng xem qua các <a href="https://www.cgv.vn/default/dream-party-package/" title="Dream Party Package" target="_blank">ý tưởng sáng tạo</a> tại CGV nhé!</p>
    </div>
    <div class="image-detail-group-sale"><img alt="CGV Group Sale" src="https://www.cgv.vn/media/wysiwyg/group-sale/Celebration.jpg"></div>
    </div>
    </div>
    </div>
    </div>`,
    `<div class="lyt-history-content ui-tabs-panel ui-widget-content ui-corner-bottom" id="group-sale-gift-card" aria-labelledby="ui-id-3" role="tabpanel" aria-expanded="false">
    <div class="outer">
    <div class="inner">
    <div class="lyt-details-contents">
    <div class="text-service-group-sale">
    <p><strong>Món quà sang trọng và ý nghĩa</strong></p>
    <p>Là một phương tiện thanh toán hiện đại và thuận tiện, thẻ quà tặng trả trước sẽ là một món quà ngập tràn sắc màu điện ảnh nhưng cũng không kém phần giá trị mà bạn có thể chia sẻ và gửi tặng bạn bè, gia đình, đồng nghiệp và đối tác.</p>
    </div>
    <div class="image-detail-group-sale"><img alt="CGV Group Sale" src="https://www.cgv.vn/media/wysiwyg/group-sale/group-sale-test.png"></div>
    </div>
    </div>
    </div>
    </div>`,
    `<div class="lyt-history-content ui-tabs-panel ui-widget-content ui-corner-bottom" id="group-sale-voucher" aria-labelledby="ui-id-4" role="tabpanel" aria-expanded="false">
    <div class="outer">
    <div class="inner">
    <div class="lyt-details-contents">
    <div class="text-service-group-sale">
    <p><strong>Chi phí marketing hợp lí</strong></p>
    <p>Với mọi ngân sách marketing, sự kiện hay hội nghị, chúng tôi đều sẽ dành cho bạn mức giá hợp lý nhất cùng mức chiết khấu cao nhất. Với thời hạn sử dụng dài cũng như khả năng quy đổi linh hoạt, khách hàng của bạn sẽ vô cùng hài lòng với món quà đặc biệt này.</p>
    </div>
    <div class="image-detail-group-sale"><img alt="CGV Group Sale" src="https://www.cgv.vn/media/wysiwyg/group-sale/Voucher.jpg"></div>
    </div>
    </div>
    </div>
    </div>`,
    `<div class="lyt-history-content ui-tabs-panel ui-widget-content ui-corner-bottom" id="group-sale-promotion" aria-labelledby="ui-id-5" role="tabpanel" aria-expanded="false">
    <div class="outer">
    <div class="inner">
    <div class="lyt-details-contents">
    <div class="text-service-group-sale">
    <p><strong>Mua 2 Tặng 1? Thật dễ dàng.</strong></p>
    <p>Bạn muốn tự thiết kế khuyến mãi dành riêng cho bạn? Hãy cùng chúng tôi thực hiện điều đó, từ thời gian khuyến mãi đến thể lệ ưu đãi, bạn sẽ có riêng một chương trình đặc biệt với CGV là phần thưởng hấp dẫn không thể cưỡng lại với mọi khách hàng.</p>
    </div>
    <div class="image-detail-group-sale"><img alt="CGV Group Sale" src="https://www.cgv.vn/media/wysiwyg/group-sale/Promotion.jpg"></div>
    </div>
    </div>
    </div>
    </div>`,
    `<div class="lyt-history-content ui-tabs-panel ui-widget-content ui-corner-bottom" id="group-sale-theme" aria-labelledby="ui-id-6" role="tabpanel" aria-expanded="false">
    <div class="outer">
    <div class="inner">
    <div class="lyt-details-contents">
    <div class="text-service-group-sale">
    <p><strong>Sáng tạo phong cách </strong></p>
    <p>Đến với CGV bạn có thể đi với bất kỳ chủ đề nào mình mong muốn để thu hút mọi nhóm đối tượng, từ các cặp đôi nhân dịp Lễ Tình Nhân, hay các gia đình vào mùa Giáng Sinh, đến các cô gái xinh đẹp nhân ngày Quốc Tế Phụ Nữ, tất cả sẽ luôn cảm thấy tươi mới và phấn khích với không khí lễ hội tại CGV.</p>
    </div>
    <div class="image-detail-group-sale"><img alt="CGV Group Sale" src="https://www.cgv.vn/media/wysiwyg/group-sale/Theme.jpg"></div>
    </div>
    </div>
    </div>
    </div>`
  ]
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
