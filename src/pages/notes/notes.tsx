import React, { memo } from 'react';
import { isEmpty } from 'lodash';
import { v4 as uuid } from 'uuid';

import {
    Grid,
    Button,
} from '@mui/material';
 
import { useStyles } from './styles';

import NoteItem from './noteItem';

// import Button from '../components/button';

type NotesProps = {
    noteList?: any,
    onOpenInput?: Function,
    onEditNote?: Function,
    onDeleteNote?: Function,
}

function Notes (props: NotesProps) {
    const {
        onOpenInput,
        noteList,
        onEditNote = () => {},
        onDeleteNote = () => {},
    } = props;
    const classes = useStyles();

    function renderList () {
        if (!isEmpty(noteList)) {
            return noteList.map((note) =>{
                return (
                    <NoteItem
                        key={uuid()}
                        note={note}
                        onEditNote={onEditNote}
                        onDeleteNote={onDeleteNote}
                    />
                );
            });
        }
        return (<React.Fragment></React.Fragment>);
    }

    return (
        <Grid className={classes.content}>
        
            <Grid className={classes.notelistContent}>
                <Grid className={classes.notesList}>
                    { renderList() }
                </Grid>
                <Grid className={classes.buttonSpace}>
                    <Button
                        id='addNoteBtn'
                        variant='outlined'
                        className={classes.addNote}
                        onClick={() => {
                            if (typeof onOpenInput === 'function') {
                                onOpenInput();
                            }
                        }}
                    >
                        Add Note
                    </Button>
                </Grid>
            </Grid>

            <Grid className={classes.notelistFooter}>
                Minimalist Note
            </Grid>
        </Grid>
    );
}

export default Notes;
