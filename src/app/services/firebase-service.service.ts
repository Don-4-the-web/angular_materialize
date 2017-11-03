import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Employee } from '../siteComponents/rolodex/employee';
import { Department } from '../siteComponents/rolodex/department';


@Injectable()
export class FirebaseServiceService {
	employees: FirebaseListObservable<Employee[]>;
	department: FirebaseListObservable<Department[]>;

  constructor(private af: AngularFireDatabase) { 

  }

  getEmployees(department: string = null) {
  	if(department != null) {
  		this.employees =  this.af.list('/employees', {
  			query: {
  				orderByChild: 'department',
  				equalTo: department
  			} 
  		}) as 
  		FirebaseListObservable<Employee[]>
  	} else {
  	this.employees =  this.af.list('/employees') as 
  	FirebaseListObservable<Employee[]>		
  }
  return this.employees;
  }

  getDepartments() {
  	this.department =  this.af.list('/departments') as FirebaseListObservable<Department[]>
  		return this.department;
  }

  addEmployee(newEmployee) {
  	
  	return this.employees.push(newEmployee);
  }

    updateEmployee(key, updEmployee) {
    
    return this.employees.update(key, updEmployee);
  }

}
