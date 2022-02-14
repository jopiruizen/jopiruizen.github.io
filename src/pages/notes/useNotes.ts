import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logInfo } from '../../utils/logs';
 
function useNotes () {
    const notesList = useSelector((state:RootState) => state.notes.notesList);

    const { 
        getNotesList,
    } = useDispatch().notes;

    useEffect(() => {
        getNotesList();
    }, []);

    useEffect(() => {
        logInfo('Notes is Updated -> ', notesList);
    }, [notesList]);

    return {
        notesList,
    };
}

export default useNotes;
