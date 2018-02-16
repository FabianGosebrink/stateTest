import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromReducer from '../reducers/reducer';
import { MainState } from '../reducers';

export const getMainState = createFeatureSelector<MainState>('mainState');

const getCompleteState = createSelector(
  getMainState,
  (state: fromFeature.MainState) => state.mainState
);

export const getCustomerList = createSelector(
  getCompleteState,
  fromReducer.getCustomerList
);

export const getCurrentlyLoading = createSelector(
  getCompleteState,
  fromReducer.getCurrentlyLoading
);
