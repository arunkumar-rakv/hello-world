import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = '';
  viewChildValue = "";
  nameList = [{
    "id": 1,
    "name": "AA"
  }, {
    "id": 2,
    "name": "BB"
  }, {
    "id": 3,
    "name": "CC"
  }]

  @ViewChild(TitleComponent, { static: true }) titleChild;


  constructor() { }

  ngOnInit() {
    this.viewChildValue = this.titleChild.viewChildValue;

  }

  getDataFromChild($event) {
    this.message=$event;
  }

}
