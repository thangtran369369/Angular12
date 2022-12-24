import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;

  constructor() { }

  public binhphuong(n: number): number {
    return n*n;
  }

  public submitData(data:any) : void {
    console.log('gui data len server. Data = ',data);
  }
}
