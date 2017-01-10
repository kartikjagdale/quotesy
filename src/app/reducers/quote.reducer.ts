import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../models/quote';
import { ActionTypes } from '../actions/quote.actions';

export type State = {
  ids: string[];
  entities: { [id: string]: Quote };
};

const initialState: State = {
  ids: [],
  entities: {}
}

export default function reducer(state = initialState, action: Action): State {
  switch(action.type){
    
    case ActionTypes.GET_QUOTE_SUCCESS: {
      const quote: Quote = action.payload;
      return Object.assign({}, state, {
        entities: Object.assign({}, state.entities,
                                {[quote.id]: quote}
                              ),
        ids: [ ...state.ids, quote.id ]
      });
    }    
    
    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
