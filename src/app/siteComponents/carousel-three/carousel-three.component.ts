import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-carousel-three',
  templateUrl: './carousel-three.component.html',
  styleUrls: ['./carousel-three.component.css']
})
export class CarouselThreeComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) {
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.carousel-slider').carousel({fullWidth: true, dist: 0, indicators: true,});
  }

}













