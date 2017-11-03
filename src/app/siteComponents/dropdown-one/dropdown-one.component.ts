import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-dropdown-one',
  templateUrl: './dropdown-one.component.html',
  styleUrls: ['./dropdown-one.component.css']
})
export class DropdownOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.dropdown-button').dropdown({inDuration: 300, outDuration: 225, constrainWidth: false, hover: false, gutter: 0, belowOrigin: true, alignment: 'left', stopPropagation: false});
  }

}






