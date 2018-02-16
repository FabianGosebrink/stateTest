import { Action } from '@ngrx/store';

export const ADD = '[First] ADD';
export const ADD_SUCCESS = '[First] ADD_SUCCESS';
export const LOAD = '[First] LOAD';
export const LOAD_SUCCESS = '[First] LOAD_SUCCESS';
export const DELETE = '[First] DELETE';
export const DELETE_SUCCESS = '[First] DELETE_SUCCESS';
export const UPDATE = '[First] UPDATE';
export const UPDATE_SUCCESS = '[First] UPDATE_SUCCESS';
export const ERROR = '[First] ERROR';

export class LoadFoodAction implements Action {
  readonly type = LOAD;
  constructor(public payload: any) {}
}

export class LoadFoodSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: any[]) {}
}

export class AddFoodAction implements Action {
  readonly type = ADD;
  constructor(public payload: any) {}
}

export class AddFoodSuccessAction implements Action {
  readonly type = ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteFoodAction implements Action {
  readonly type = DELETE;
  constructor(public payload: any) {}
}

export class DeleteFoodSuccessAction implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateFoodAction implements Action {
  readonly type = UPDATE;
  constructor(public payload: any) {}
}

export class UpdateFoodSuccessAction implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: any) {}
}

export class FoodErrorAction implements Action {
  readonly type = ERROR;
  constructor(public payload: any) {}
}

export type FoodActions =
  | FoodErrorAction
  | UpdateFoodAction
  | UpdateFoodSuccessAction
  | LoadFoodSuccessAction
  | LoadFoodAction
  | AddFoodAction
  | AddFoodSuccessAction
  | DeleteFoodAction
  | DeleteFoodSuccessAction;
