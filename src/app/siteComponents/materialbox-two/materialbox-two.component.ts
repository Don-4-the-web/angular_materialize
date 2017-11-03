import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-materialbox-two',
  templateUrl: './materialbox-two.component.html',
  styleUrls: ['./materialbox-two.component.css']
})
export class MaterialboxTwoComponent implements OnInit {
  elementRef: ElementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.slider').slider();
  }

}




