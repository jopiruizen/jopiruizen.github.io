import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteInput from './noteInput';

function useNoteInput (props:any = {}) {
    const {
        initialData,
    } = props;

    const [open, setOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState({});
    
    // const notesList = useSelector((state:RootState) => state.notes.notesList);

    const { 
        createUpdateNote,
        getNotesList,
        deleteNote: storeDeleteNote,
    } = useDispatch().notes;

    function getInitialData () {
        if (initialData) {
            return initialData;
        }
        return defaultData();
    }

    function defaultData () {
        return {
            title: 'New Note',
            tags: '',
            content: '',
        };
    }

    const [input, setInput] = useState(getInitialData());

    function openNoteInput () {
        setOpen(true);
    }

    function handleClose () {
        setOpen(false);
    }

    function updateInput (data:any) {
        setInput({
            ...input,
            ...data,
        });
    }

    async function onSave () {
        await createUpdateNote({ ...input });
        setOpen(false);
        setInput(defaultData());
        getNotesList();
    }

    function renderNoteInput () {
        return (
            <NoteInput 
                open={open}
                onCloseNote={handleClose}
                input={input}
                updateInput={updateInput}
                onSave={onSave}
            />
        );
    }

    function handleEdit (note) {
        setInput({
            ...note,
        });
        setOpen(true);
    }

    async function deleteNote () {
        await storeDeleteNote(deleteTarget);
        getNotesList();
    }

    return {
        openNoteInput,
        renderNoteInput,
        handleEdit,

        deleteNote,
        setDeleteTarget,
    }
}

export default useNoteInput;
