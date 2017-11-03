import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-carousel-one',
  templateUrl: './carousel-one.component.html',
  styleUrls: ['./carousel-one.component.css']
})
export class CarouselOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef) { 
  	this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.carousel').carousel();
  }

}
