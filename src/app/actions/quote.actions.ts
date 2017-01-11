import { type } from '../util';
import { Action } from '@ngrx/store';
import { Quote } from '../models/quote';

/**
 * Constant ActionTypes
 */
export const ActionTypes = {
  GET_QUOTE:         type('Get Quote'),
  GET_QUOTE_SUCCESS: type('Get Quote Success')
}

/**
 * @class QuoteActions
 * All Actions that can be performed on a Quote 
 */
export class QuoteActions {
  
  /**
   * Get Quote Action
   * 
   * @return Action of type `Get Quote`
   */
  getQuote(): Action {
    return {
      type: ActionTypes.GET_QUOTE
    }
  }

  /**
   * Get Quote Success Action
   * 
   * @return Action of type `Get Quote Success` and Quote payload. 
   */
  getQuoteSuccess(quote: Quote): Action {
    return {
      type: ActionTypes.GET_QUOTE_SUCCESS,
      payload: quote
    }
  }
}
