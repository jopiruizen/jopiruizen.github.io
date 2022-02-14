import { createSelector } from 'reselect';

const noteDetails = state => state.notes.noteDetails;
export const getNoteDetails = createSelector(
  [ noteDetails ],
  data => data,
);

const notesList = state => state.notes.notesList;
export const getNotesList = createSelector(
  [ notesList ],
  data => data,
);

const isLoading = state => state.notes.isLoading;
export const getIsLoading = createSelector(
  [ isLoading ],
  data => data,
);