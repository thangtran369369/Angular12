import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thang';
  public age = 15;
  public traiCay=['Tao','Xoai']
  public districts : string[] = [];
  public traiCay2=[
        {ten:'tao',gia:12,hagia:false},
        {ten:'nho',gia:-3,hagia:true}
  ]

  public vietnamData = [{city:'Chọn thành phố', district:['Quận huyện']},
  {city:'Đà Nẵng', district:['Quận Cẩm Lệ','Quận Hải Châu','Quận Liên Chiểu',
  'Quận Ngũ Hành Sơn','Quận Sơn Trà','Quận Thanh Khê','Huyện Hòa Vang','Huyện Hoàng Sa']},
  {city:'Bà Rịa - Vũng Tàu', district:['Thành phố Vũng Tàu','Thị xã Bà Rịa','Thị xã Phú Mỹ',
  'Huyện Châu Đức','Huyện Côn Đảo','Huyện Đất Đỏ','Huyện Long Điền','Huyện Tân Thành','Huyện Xuyên Mộc']},
  {city:'Bạc Liêu', district:['Thành phố Bạc Liêu','Huyện Đông Hải','Huyện Giá Rai','Huyện Hòa Bình',
  'Huyện Hồng Dân','Huyện Phước Long','Huyện Vĩnh Lợi']}
];
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay',this.vietnamData)
  }

  public resetName():void {
    this.name = '';
  }

  public changeCity(event:any):void {
    const city = event.target.value;
    console.log('event',city);

    if(!city) {
      return;
    }

    //cach 1
    // const search = this.vietnamData.filter(data => data.city === city);
    // console.log("search",search);
    // if(search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }

}
