import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  public titleName = "title-component";
  public titleId = "title1";
  public titleClass = "text-blue";
  public isBlue = true;
  public isBold = true;

  public titleClasses = {
    "text-blue": this.isBlue,
    "text-bold": this.isBold
  }

  public inputValue = "";

  displayIf = false;

  switchValue = 1;

  colorsList = ['red', 'green', 'blue'];

  @Input() public fromApp;

  @Input() public nameList;

  @Output() fromChild = new EventEmitter();

  viewChildValue = "from view child";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.titleName="Button clicked";
  }

  sendDataToParent() {
    this.fromChild.emit('Button pressed from child component');
  }
}
