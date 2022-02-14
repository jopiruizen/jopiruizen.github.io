import { createModel } from "@rematch/core";
import { RootModel } from "../";

import * as effects from './effects';
import reducer from './reducers';
// import * as selectors from './selectors';
import { NotesState } from "./interface";

const initialState:NotesState = {
    noteDetails: {
        id: '',
        title: '',
        content: '',
        tags: '',
        dateCreated: 0,
        dateModified: 0,
    },

    notesList: [],
    isLoading: false,
};


const notes = createModel<RootModel>() ({
    name: 'notes',
    state: initialState,
    effects: () => effects,
    reducers: {
        ...reducer.reducers,
    },
    // selectors: () => {},
    /*
    selectors: (slice,createSelector, hasProps) => ({
        getNoteDetails = selectors.getNoteDetails,
    }),
    */
    // selectors: omit(selectors, Object.keys(selectors).filter(prop => selectors[prop].omitToRematch)),
});

export default notes;

/*
export default {
    name: 'notes',
    state: initialState,
    effects: () => effects,
    reducers: {
        ...reducer.reducers,
    },
    selectors: omit(selectors, Object.keys(selectors).filter(prop => selectors[prop].omitToRematch)),
};
*/