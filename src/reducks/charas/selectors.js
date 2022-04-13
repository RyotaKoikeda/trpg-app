import { createSelector } from "reselect";

const charasSelector = (state) => state.charas;

export const getCharas = createSelector(
  [charasSelector],
  (state) => state.list
);
