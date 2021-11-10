import { createSelector } from "reselect";

const tagsSelector = (state) => state.tags;

export const getTags = createSelector([tagsSelector], (state) => state.list);
