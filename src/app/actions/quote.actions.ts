import { type } from '../util';
import { Action } from '@ngrx/store';
import { Quote } from '../models/quote';

export const ActionTypes = {
  GET_QUOTE:         type('Get Quote'),
  GET_QUOTE_SUCCESS: type('Get Quote Success')
}

export class QuoteActions {
  
  getQuote(): Action {
    return {
      type: ActionTypes.GET_QUOTE
    }
  }

  getQuoteSuccess(quote: Quote): Action {
    return {
      type: ActionTypes.GET_QUOTE_SUCCESS,
      payload: quote
    }
  }
}
