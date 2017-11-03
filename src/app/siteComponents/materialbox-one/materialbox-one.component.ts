import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-materialbox-one',
  templateUrl: './materialbox-one.component.html',
  styleUrls: ['./materialbox-one.component.css']
})
export class MaterialboxOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) {
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.materialboxed').materialbox();
  }

}







