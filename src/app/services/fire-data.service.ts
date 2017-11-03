import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FireDataService {
  shoppingItems:any;
  
  constructor(public afd: AngularFireDatabase ) {}

  getShoppingItems() {
  	return this.afd.list('/shoppingItems/');
  }

  addItem(name) {
  	this.afd.list('/shoppingItems/').push(name);
  }
  removeItem(id) {
  	this.afd.list('/shoppingItems/').remove(id);
  }

}
