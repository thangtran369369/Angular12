import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thang';
  public age = 15;
  constructor() { }

  ngOnInit(): void {}

  public resetName():void {
    this.name = '';
    console.log('resetName')
  }

}
