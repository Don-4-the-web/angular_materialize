import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MydohcEmployeesService {
 
  
  constructor(private db: AngularFireDatabase) {}

 getEmployees(start, end): FirebaseListObservable<any> {
    return this.db.list('/employees', {
      query: {
        orderByChild: 'first_name',
        limitToFirst: 20,
        startAt: start,
        endAt: end
      }

    });
  }
}











