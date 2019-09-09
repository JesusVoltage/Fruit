import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit {

  public counter : number = 0;

  public counterSum : number = 0;
  public counterRem : number = 0;
  constructor() { }

  ngOnInit() {
  }
  onOpened(type: boolean){
    type ? this.counter++ : this.counter--;
  }

  controlSum(num : number){
    this.counterSum += +num;
  }
  controlRem(num : number){
    console.log(num);
    this.counterRem += +num;
  }
}
