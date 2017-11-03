import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieListService {
  
  constructor(public http: Http ) {}

  getMovies(){
  	return this.http.get('https://searchmovies-aa4e8.firebaseio.com/data.json');
  }



}










