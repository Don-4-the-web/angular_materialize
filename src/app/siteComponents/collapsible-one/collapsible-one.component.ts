import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-collapsible-one',
  templateUrl: './collapsible-one.component.html',
  styleUrls: ['./collapsible-one.component.css']
})
export class CollapsibleOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.collapsible').collapsible({expandable:true});
  }

}





