import { compose } from '@ngrx/core/compose'
import { combineReducers } from '@ngrx/store';
import quote, * as fromQuote from './quote.reducer';
import { createSelector } from 'reselect';

// Export Entire State of App
export interface AppState {
  quote: fromQuote.State
}

// Export All Reducers
export default compose(combineReducers)({
  quote: quote
});


export const getQuoteState = (appState: AppState) => appState.quote;
export const getQuoteEntities = createSelector(getQuoteState, fromQuote.getEntities);
export const getQuoteIds = createSelector(getQuoteState, fromQuote.getIds);

export const getRandomQuote = createSelector(getQuoteEntities, getQuoteIds, (entites, ids) => {
  const latestQuoteId = ids[ids.length - 1];
  return entites[latestQuoteId];
})
