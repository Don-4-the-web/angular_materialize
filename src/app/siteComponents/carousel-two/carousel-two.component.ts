import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-carousel-two',
  templateUrl: './carousel-two.component.html',
  styleUrls: ['./carousel-two.component.css']
})
export class CarouselTwoComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.carousel-slider').carousel({fullWidth: true, dist: 0, indicators: true});
  }

}
