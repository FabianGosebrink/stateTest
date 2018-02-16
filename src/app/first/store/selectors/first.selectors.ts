import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromReducer from '../reducers/first.reducer';

const getCompleteState = createSelector(
  fromFeature.getFoodState,
  (state: fromFeature.FirstState) => state.firstFromIndex
);

export const getAllEntities = createSelector(
  getCompleteState,
  fromReducer.getReducerEntities
);

export const getItemsLoaded = createSelector(
  getCompleteState,
  fromReducer.getReducerLoaded
);

export const getAll = createSelector(getAllEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
