import { Component,  OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-nav-2',
  templateUrl: './nav-2.component.html',
  styleUrls: ['./nav-2.component.css']
})
export class Nav2Component implements OnInit {

  constructor(private el:ElementRef){}
  ngOnInit() {
    jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
  }

}
