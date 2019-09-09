import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent implements OnInit {

  @Input() public tittle : string;
  @Output() opened = new EventEmitter<boolean>();
  public show : boolean = false;

  constructor() { }

  ngOnInit() {}

  showContent(){
    if(this.show){
      this.show = false;
      this.opened.emit(false);
    }
    else{
      this.show = true;
      this.opened.emit(true);
    } 
  }

}
