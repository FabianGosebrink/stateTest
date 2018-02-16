import * as fromReducer from './first.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface FirstState {
  firstFromIndex: fromReducer.FirstState;
}

export const reducers: ActionReducerMap<FirstState> = {
  firstFromIndex: fromReducer.foodItemsReducer
};

export const getFoodState = createFeatureSelector<FirstState>('first');
