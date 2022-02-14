import React, { memo } from 'react';

import { compose } from 'redux';
import {
    Grid,
} from '@mui/material';

import useNotes from './useNotes';
import useNoteInput from './useNoteInput';
import useConfirmation  from '../components/confirmations/useConfirmation';
import { useStyles } from './styles';

import Notes from './notes';

type NotesWrapperProps = {

}

function NotesWrapper (props: NotesWrapperProps) {
    const classes = useStyles();

    const {
        notesList,
    } = useNotes();

    const {
        renderNoteInput,
        openNoteInput,
        handleEdit,
        deleteNote,
        setDeleteTarget,
    } = useNoteInput();

    const {
        renderConfirmation,
        openConfirmation,
    } = useConfirmation({
        title: 'Delete note',
        message: 'Are you sure you want to delete this note?',
        onOk: () => { deleteNote() },
    });

    return (
        <React.Fragment>
            <Grid className={classes.page}>
                <Notes
                    noteList={notesList}
                    onOpenInput={() => openNoteInput()}
                    onEditNote={(data) => handleEdit(data)}
                    onDeleteNote={(data) => {
                        setDeleteTarget(data);
                        openConfirmation();
                    }}
                />
            </Grid>
            { renderNoteInput() }
            { renderConfirmation() }
        </React.Fragment>  
    );
}

const enhancers = [
    memo,
];

export default compose(...enhancers)(NotesWrapper);
