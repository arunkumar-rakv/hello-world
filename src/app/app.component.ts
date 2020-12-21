import { Component, ViewChild, OnInit } from '@angular/core';
import { TitleComponent } from "./title/title.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
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



  constructor() {}

  ngOnInit() {
    this.viewChildValue = this.titleChild.viewChildValue;
  }

  getDataFromChild($event) {
    this.message=$event;
  }

}
