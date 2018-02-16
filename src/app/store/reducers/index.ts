import * as fromMainStore from './reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface MainState {
  mainState: fromMainStore.MainState;
}

export const mainState: ActionReducerMap<MainState> = {
  mainState: fromMainStore.mainReducer
};
