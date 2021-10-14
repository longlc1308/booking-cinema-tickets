import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  cgv_city: Array<string>;
  oldId: string = 'city_1';
  rId: string;
  currentCgv: Object;

  cinemasList = [
    {city: 'Hà Nội', cgvList: ['CGV Vincom Center Bà Triệu', 'CGV Vincom Royal City', 'CGV Hồ Gươm Plaza']},
    {city: 'Hồ Chí Minh', cgvList: ['CGV Hùng Vương Plaza', 'CGV Crescent Mall', 'CGV Pandora City']},
  ];

  contents = [
    {name:'CGV Vincom Center Bà Triệu', address:'Tầng 6, Toà nhà VinCom Center Hà Nội 191 đường Bà Triệu Quận Hai Bà Trưng Hà Nội', fax:"+84 4 6 275 5240", hotline: '1900 6017', img: 'https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_tra_vinh_v1_170304_15.jpg', iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.995822806579!2d105.84872864758232!3d21.0127543154845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc63d40303535e19c!2sR%E1%BA%A1p+chi%E1%BA%BFu+phim+CGV+Vincom+Center+Ba+Trieu!5e0!3m2!1svi!2svn!4v1407575740830", },
    {name:'CGV Vincom Royal City', address:'Tầng B2- Khu R4, TTTM Vincom Mega Mall Royal City , 72A Nguyễn Trãi,Thanh Xuân, Hà Nội.', fax:"+84 4 6 275 5240", hotline: '1900 6017', img: 'https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/_/l/_lhh2535.jpg', iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.03947762673!2d105.79969441493203!3d20.991054586018862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2d0ecc9056aa82f!2sVincom+Mega+Mall+Royal+City!5e0!3m2!1svi!2s!4v1498726815770", },
    {name:'CGV Hồ Gươm Plaza', address:'Tầng 6, Toà nhà VinCom Center Hà Nội 191 đường Bà Triệu Quận Hai Bà Trưng Hà Nội', fax:"+84 4 6 275 5240", hotline: '1900 6017', img: 'https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/k/l/klg_4099.jpg', iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.3793618302534!2d105.783283!3d20.977425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2c0e21d7b%3A0xec2205f220faeb2!2zQ0dWIEjhu5MgR8awxqFtIFBsYXph!5e0!3m2!1sen!2s!4v1423102466492", },
    {name:'CGV Hùng Vương Plaza', address:'Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM', fax:"+84 4 6 275 5240", hotline: '1900 6017', img: 'https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/i/m/img_0027_2a_2_1.jpg', iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.8605272140667!2d106.66259586811066!3d10.755968268574438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef08a32cf6f%3A0x796d8897cb4e6b59!2sCGV+Hung+Vuong+Plaza!5e0!3m2!1sen!2s!4v1423115214982" },
    {name:'CGV Crescent Mall', address:'Lầu 5, Crescent Mall Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng Quận 7 TP. Hồ Chí Minh', fax:"+84 4 6 275 5240", hotline: '1900 6017', img: 'https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/4/_/4.jpg', iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.0351426539758!2d106.71814944161731!3d10.729062445877723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a5bb83950a26d5b!2sMegastar+Crescent+Mall!5e0!3m2!1svi!2s!4v1407569121975", },
    {name:'CGV Pandora City', address:'Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú TP. Hồ Chí Minh', fax:"+84 4 6 275 5240", hotline: '1900 6017', img: 'https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/_/m/_mg_4806_-_copy_2a_1.jpg', iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.528937434902!2d106.63573653642992!3d10.806879447187441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295978943725%3A0x4012c0c89a5b6635!2sCGV+Pandora+City!5e0!3m2!1sen!2s!4v1423115963785", },
  ]

  constructor() {
    this.cgv_city = this.cinemasList[0].cgvList;
   }

  ngOnInit() {


  }
  selectRegion(id: string, index: number) {
    if(this.oldId){
      const btnUnactive = document.getElementById(this.oldId);
      btnUnactive.classList.remove("siteactive")
    }
    const btnActive = document.getElementById(id);
    btnActive.classList.add("siteactive");
    this.cgv_city = this.cinemasList[index].cgvList;
    this.oldId = id;
  }

  displayCurrentCgv(cgv_name:string, currentId: string, dcmm) {
    console.log(currentId);
    if(this.rId){
      const cgvUnacctive = document.getElementById(this.rId);
      cgvUnacctive.classList.remove("siteactive")
    }
   const cgvActive = document.getElementById('wave'+ currentId);
   cgvActive.classList.add('siteactive');
   this.rId = 'wave'+ currentId;
    for(var i in this.contents){
      if(this.contents[i].name === cgv_name){
        this.currentCgv = this.contents[i];
      }
    }
  }
  onOpenMaps() {
    const mapActive = document.getElementById('ggmaps');
    mapActive.classList.remove('hidden');
  }
  onCloseMaps(){
    const mapUnactive = document.getElementById('ggmaps');
    mapUnactive.classList.add('hidden')
  }
}
