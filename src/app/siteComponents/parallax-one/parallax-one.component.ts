import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-parallax-one',
  templateUrl: './parallax-one.component.html',
  styleUrls: ['./parallax-one.component.css']
})
export class ParallaxOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.parallax').parallax();
  }

}










