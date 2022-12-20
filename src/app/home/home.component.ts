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
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay',this.traiCay)
  }

  public resetName():void {
    this.name = '';
  }

}
