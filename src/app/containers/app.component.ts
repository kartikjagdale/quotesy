import { Component } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppState, getRandomQuote } from '../reducers/index';
import { QuoteActions } from '../actions/quote.actions';
import { Quote } from '../models/quote';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Component({
  selector: 'quot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: any;
  
  constructor(
    private jsonp: Jsonp, 
    private store: Store<AppState>,
    private quoteActions: QuoteActions
  ){ 
    this.store.dispatch(this.quoteActions.getQuote());
    this.quote = this.store.select(getRandomQuote);
  }
  /**
   * Dispatch action to get Random Quote from Quotes api
   * and store it in Ngrx store;
   * 
   * @method getRandomQuote
   */
  getRandomQuote(){
    this.store.dispatch(this.quoteActions.getQuote());
  }

  isProducionEnv(){
    return environment.production ? true : false 
  }
}