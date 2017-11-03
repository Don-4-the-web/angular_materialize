import { Component, OnInit } from '@angular/core';
import { MydohcEmployeesService } from '../../services/mydohc-employees.service';
import {Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-my-dohc-employees',
  templateUrl: './my-dohc-employees.component.html',
  styleUrls: ['./my-dohc-employees.component.css']
})


export class MyDohcEmployeesComponent implements OnInit {
  employees;
  startAt = new Subject()
  endAt = new Subject()

  constructor(public myDohcEmployees: MydohcEmployeesService) {}

  ngOnInit() {
   this.myDohcEmployees.getEmployees(this.startAt, this.endAt)
      .subscribe(employees => this.employees = employees)
  }

  search($event) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
}
















