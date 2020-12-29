import { Component, OnInit, ContentChild, ContentChildren, ElementRef, Renderer2,
AfterContentInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-lifecycles-child',
  templateUrl: './lifecycles-child.component.html',
  styleUrls: ['./lifecycles-child.component.css']
})
export class LifecyclesChildComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild("header", { static: false }) headerContainer: ElementRef;
  @ContentChildren("body") bodyContainer: ElementRef;
  @ViewChild("para", { static: false }) paraContainer: ElementRef;
  @ViewChildren("para") paraList: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("para", this.paraContainer);
    console.log("paraList", this.paraList);
    this.renderer.setStyle(this.paraContainer.nativeElement, "color", "blue");
  }

  ngAfterContentInit() {
    this.renderer.setStyle(this.headerContainer.nativeElement, "color", "red");
    console.log("bodycontainer", this.bodyContainer);
    
  }

}
