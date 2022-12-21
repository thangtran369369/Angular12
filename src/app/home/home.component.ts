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
  public traiCay2=[
        {ten:'tao',gia:12,hagia:false},
        {ten:'nho',gia:-3,hagia:true}
  ]
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay',this.traiCay)
  }

  public resetName():void {
    this.name = '';
  }

}
