import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-tabs-two',
  templateUrl: './tabs-two.component.html',
  styleUrls: ['./tabs-two.component.css']
})
export class TabsTwoComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('ul.tabs').tabs({swipeable: true});
  }

}



