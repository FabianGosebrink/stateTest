import { Action } from '@ngrx/store';

export interface MainState {
  currentlyLoading: boolean;
  entities: { [id: string]: any };
}

export const initialState: MainState = {
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

export const getCurrentlyLoading = (state: MainState) => state.currentlyLoading;
export const getCustomerList = (state: MainState) => state.entities;
