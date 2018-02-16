import { Action } from '@ngrx/store';

export interface AppState {
  mainState: MainState;
}

export interface MainState {
  currentlyLoading: boolean;
  entities: { [id: string]: any };
}

const initialState: MainState = {
  currentlyLoading: false,
  entities: {}
};

export function mainReducer(
  state: MainState = initialState,
  action: Action
): MainState {
  // JUST FOR DEMO PURPOESE; HERE COULD BE SOME ACTIONS
  return state;
}

export const selectMainStateFromReducer = (state: AppState) => state.mainState;
export const getCurrentlyLoadingFromReducer = (state: MainState) =>
  state.currentlyLoading;
export const getCustomerListFromReducer = (state: MainState) => state.entities;
