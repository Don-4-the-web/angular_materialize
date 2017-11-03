import { Component, ElementRef, Inject, OnInit } from '@angular/core';

import { MydohcEmployeesService } from '../../services/mydohc-employees.service';
import {Subject } from 'rxjs/Subject';

import {MaterializeDirective} from "angular2-materialize";
import {NgForm} from '@angular/forms';
declare var jQuery:any;






@Component({
  selector: 'app-mydohc-form',
  templateUrl: './mydohc-form.component.html',
  styleUrls: ['./mydohc-form.component.css']
  })
export class MydohcFormComponent implements OnInit {
	elementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  	jQuery('select').material_select();
      }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
;