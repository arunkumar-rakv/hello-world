import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-try',
  templateUrl: './pipes-try.component.html',
  styleUrls: ['./pipes-try.component.css']
})
export class PipesTryComponent implements OnInit {

  dateValue = new Date();
  percentValue = 0.35;
  name = "Arunkumar";

  constructor() { }

  ngOnInit() {
  }

}
