import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.css']
})
export class ModalOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
  jQuery(this.elementRef.nativeElement).find('.modal').modal();
  }

}








