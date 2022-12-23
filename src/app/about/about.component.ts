import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public loginName = 'admin';
  public myColor = "red";
  public counter = 0;
  public couterBinhPhuong = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.couterBinhPhuong = this.common.binhphuong(this.counter);
    this.common.counter++;
  }

}
