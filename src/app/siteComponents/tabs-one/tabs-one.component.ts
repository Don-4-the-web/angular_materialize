import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
declare var jQuery:any;

@Component({
  selector: 'app-tabs-one',
  templateUrl: './tabs-one.component.html',
  styleUrls: ['./tabs-one.component.css']
})
export class TabsOneComponent implements OnInit {
  elementRef: ElementRef;
  constructor( @Inject(ElementRef) elementRef: ElementRef ) { 
  this.elementRef = elementRef;
  }

  ngOnInit() {
   jQuery(this.elementRef.nativeElement).find('ul.tabs').tabs('select_tab', 'tab_id');
  }

}










