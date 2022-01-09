// constants
import { REQUEST_STATE } from "../constants"

// action
import {
  FOODS_FETCHING_ACTION,
  FOODS_FETCH_SUCCESS_ACTION
} from "../actions"

export interface Action {
  type: String;
  payload?: any;
}

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  foodsList: []
}

export const foodsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FOODS_FETCHING_ACTION:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case FOODS_FETCH_SUCCESS_ACTION:
      return {
        fetchState: REQUEST_STATE.OK,
        foodsList: action.payload.foods,
      };
    default:
      throw new Error();
  }
}
