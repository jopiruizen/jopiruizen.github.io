const setNoteDetails = (state, noteDetails) => ({
    ...state,
    noteDetails,
});

const setNotesList = (state, notesList) => ({
    ...state,
    notesList,
});

const setIsLoading = (state, isLoading) => ({
    ...state,
    isLoading,
});


export default {
    reducers: {
        setNoteDetails,
        setNotesList,
        setIsLoading,
    },
};