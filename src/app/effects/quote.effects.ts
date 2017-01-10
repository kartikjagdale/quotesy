import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ActionTypes, QuoteActions } from '../actions/quote.actions';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';

@Injectable()
export class QuoteEffects {
  constructor(
    private actions$: Actions,
    private quoteActions: QuoteActions,
    private quoteService: QuoteService
  ){ }

  @Effect() getQuote$: Observable<Action>  = this.actions$
    .ofType(ActionTypes.GET_QUOTE)
    .switchMap(() => this.quoteService.getRandomQuote())
    .map((response:any) => this.quoteService.parseResponse(response))
    .map((quote: Quote) => this.quoteActions.getQuoteSuccess(quote));
}
