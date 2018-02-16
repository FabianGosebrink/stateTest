import { Action } from '@ngrx/store';

import * as fromActions from '../actions/first.actions';

export interface FirstState {
  entities: { [id: string]: any };
  loaded: boolean;
  loading: boolean;
}

export const initialState: FirstState = {
  entities: {},
  loaded: false,
  loading: false
};

export function foodItemsReducer(
  state = initialState,
  action: fromActions.FoodActions
): FirstState {
  switch (action.type) {
    case fromActions.ADD_SUCCESS:
    case fromActions.UPDATE_SUCCESS: {
      const foodItem = action.payload;

      const entities = {
        ...state.entities,
        [foodItem.id]: foodItem
      };

      return {
        ...state,
        entities
      };
    }

    case fromActions.LOAD_SUCCESS: {
      const payload = action.payload;

      const entities: { [id: string]: any } = {};

      payload.forEach((item: any) => {
        entities[item.id] = item;
      });

      return {
        ...state,
        entities,
        loaded: true
      };
    }

    case fromActions.DELETE_SUCCESS: {
      const foodItem = action.payload;
      const { [foodItem.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    }

    default:
      return state;
  }
}

export const getReducerEntities = (state: FirstState) => state.entities;
export const getReducerLoaded = (state: FirstState) => state.loaded;
export const getReducerLoading = (state: FirstState) => state.loading;
