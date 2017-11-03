import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-nav-1',
  templateUrl: './nav-1.component.html',
  styleUrls: ['./nav-1.component.css']
})
export class Nav1Component implements OnInit {

  title = 'app works!';

  constructor(private el:ElementRef){}
  ngOnInit() {
    jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
  }
}
