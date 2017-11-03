import { Component} from '@angular/core';
import { FireDataService} from '../../services/fire-data.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})


export class ShoppingListComponent {
  public newItem:any;

  shoppingItems: FirebaseListObservable<any[]>;

  constructor(public firebaseService: FireDataService) {
  	this.shoppingItems = this.firebaseService.getShoppingItems();
  }
  addItem() {
  	this.firebaseService.addItem(this.newItem);
  }
  removeItem(id) {
  	this.firebaseService.removeItem(id);
  }
}
