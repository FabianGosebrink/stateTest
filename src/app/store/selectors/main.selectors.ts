import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import {
  selectMainStateFromReducer,
  getCustomerListFromReducer
} from '../reducers/reducer';

// export const getMainState = createFeatureSelector<fromFeature.MainState>(
//   'mainState'
// );

// const getCompleteState = createSelector(
//   getMainState,
//   (state: fromFeature.MainState) => state.mainState
// );

export const getCustomerList = createSelector(
  selectMainStateFromReducer,
  getCustomerListFromReducer
);

export const getCurrentlyLoading = createSelector(
  selectMainStateFromReducer,
  getCustomerListFromReducer
);
