import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() public sum: number;
  @Input() public rem: number;

  @Output() public sumUp = new EventEmitter<number>();
  @Output() public remUp = new EventEmitter<number>();

  public media: number;

  constructor() { }

  ngOnInit() {

    


    if( +this.sum == 0 && +this.rem == 0 ){
      this.media = 0;

      this.sumUp.emit(0);
      this.remUp.emit(0);

    }else{
      this.media = +(+this.sum*10) / +(+this.sum + +this.rem);
      this.media = +this.media.toFixed(2);
      this.sumUp.emit(+this.sum);
      this.remUp.emit(+this.rem);
    }      

   
  }


  vote(type: boolean){
    if(type){
      console.log('truki');
      this.sum++;
      this.media = (+this.sum*10) / +(+this.sum + +this.rem);
      this.media = +this.media.toFixed(2);

      this.sumUp.emit(1);
    } 
    else{
      this.rem++;
      this.media = (+this.sum*10) / +(+this.sum + +this.rem);
      this.media = +this.media.toFixed(2);
  
      this.remUp.emit(1);
    } 
  }


}
