import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CharasReducer = (state = initialState.charas, action) => {
  switch (action.type) {
    case Actions.DELETE_CHARAS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.FETCH_CHARAS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
