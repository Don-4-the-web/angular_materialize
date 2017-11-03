import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Employee } from './employee';
import { Department } from './department';
declare var jQuery:any;

@Component({
  selector: 'app-rolodex',
  templateUrl: './rolodex.component.html',
  styleUrls: ['./rolodex.component.css'],
  providers: [FirebaseServiceService]
})
export class RolodexComponent implements OnInit {
	employees: Employee[];
	departments: Department[];
	appState: string;
	activeKey: string;
  activeFirst_name:string;
  activeLast_name:string;
  activeTitle:string;
  activeDepartment:string;
  activeYears_in_business:string;
  activeDescription:string;
  activePhone:string;
  activeExtension:string;
  activeStreet_address:string;
  activeEmail:string;
  activeCity:string;
  activeZipcode:string;
  constructor(private fbService: FirebaseServiceService) { }
  ngOnInit() { 
    this.fbService.getEmployees().subscribe( employees => {
   		this.employees = employees;
   	});
    this.fbService.getDepartments().subscribe( departments => {
   		this.departments = departments;
   		});
   } 
   changeState(state, key?) {
   	//console.log('Changing state to : '+state);
   	if(key) {
   		//console.log('Changing key to : '+key);
   		this.activeKey = key;
   	}
   	this.appState = state;
  }
  	filterCategory(departments) {
   	this.fbService.getEmployees(departments).subscribe( employees => {
   	this.employees = employees;
   });
  }
    addEmployee( 
  			first_name: string,
  			last_name: string,
        title: string, 
  			department: string, 
        years_in_business: string,
  			description: string, 
  			phone: string,
        extension: string,
        email: string,
  			street_address: string, 
  			city: string, 
  			zipcode: string) 
        {
		      var created_at = new Date().toString();
		      var newBusiness = {
			    first_name:first_name,
			    last_name:last_name,
          title: title,
			    department: department,
			    years_in_business: years_in_business,	
			    description: description,
			    phone: phone,
          extension: extension,
          email: email,  
			    street_address: street_address, 
			    city: city,
			    zipcode: zipcode,
			    created_at:created_at
			 }
			//console.log(newBusiness);
			this.fbService.addEmployee(newBusiness); 
			this.changeState('default');
  }
  showEdit(employee) {
  this.changeState('edit', employee.$key);
  this.activeFirst_name = employee.first_name; 
  this.activeLast_name = employee.last_name; 
  this.activeDepartment = employee.department; 
  this.activeTitle = employee.title; 
  this.activeYears_in_business = employee.years_in_business; 
  this.activeDescription = employee.description; 
  this.activePhone = employee.phone; 
  this.activeExtension = employee.extension;
  this.activeEmail = employee.email; 
  this.activeStreet_address = employee.street_address; 
  this.activeCity = employee.city;  
  this.activeZipcode = employee.zipcode; 
  }
  updateEmployee() {
    var updEmployee = {
      first_name:this.activeFirst_name,
      last_name:this.activeLast_name,
      title:this.activeTitle,
      department:this.activeDepartment,
      years_in_business:this.activeYears_in_business,
      description:this.activeDescription,
      phone:this.activePhone,
      extension:this.activeExtension,
      email:this.activeEmail,
      street_address:this.activeStreet_address,
      city:this.activeCity,
      zipcode:this.activeZipcode
    }
    this.fbService.updateEmployee(this.activeKey, updEmployee);

    this.changeState('default');
  }

}
