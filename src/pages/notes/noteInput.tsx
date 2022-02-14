import React, { useEffect, useState } from 'react';
import DialogWrapper from '../components/dialog';
import {
    Grid,
    Button,
    TextField,
} from '@mui/material';

import { useStyles } from './styles';

type NoteInputProps = {
    open?: boolean,
    onCloseNote?: Function,
    input?: any,
    updateInput?: Function,
    onSave?: Function,
}

function NoteInput (props:NoteInputProps) {
    const classes = useStyles();
    const {
        open,
        onCloseNote,
        input,
        updateInput,
        onSave,
    } = props;

    const [noteOpen, setNoteOpen] = useState(open);

    useEffect(() => {
        console.log('Note Open: ', noteOpen);
    },[]);

    useEffect(() => {
        console.log('NoteInput.useEFfect(open)', open);
        setNoteOpen(open);
    }, [open])


    return (
        <DialogWrapper
            open={noteOpen}
            onClose={() => {
                if (typeof onCloseNote === 'function') {
                    onCloseNote();
                }
            }}
        >
            <Grid className={classes.noteInput}>
                <Grid className={classes.noteInputTitle}>

                    <TextField

                        className={classes.textInput}
                     
                        id="title"
                        label=""

                        value={input.title}
                        onChange={(e) => {
                            if (typeof updateInput === 'function') {
                                updateInput({
                                    title: e.target.value,
                                });
                            }
                        }}

                        name="title"
                        variant="outlined"
                        helperText={ 'Title'}
                    />

                </Grid>

                <Grid className={classes.noteInputTitle}>

                    <TextField

                        className={classes.textInput}
                     
                        id="tags"
                        label=""

                        value={input.tags}
                        onChange={(e) => {
                            if (typeof updateInput === 'function') {
                                updateInput({
                                    tags: e.target.value,
                                });
                            }
                        }}

                        name="tags"
                        variant="outlined"
                        helperText={ 'Tags'}

                    />

                </Grid>

                <Grid className={classes.noteInputContent}>
                     <TextField

                        className={classes.textInput}
                     
                        id="content"
                        label=""
                        
                        multiline
                        rows="10"

                        value={input.content}
                        onChange={(e) => {
                            if (typeof updateInput === 'function') {
                                updateInput({
                                    content: e.target.value,
                                });
                            }
                        }}

                        name="title"
                        variant="outlined"
                        helperText={ 'Content'}
                    />
                </Grid>

                <Grid className={classes.noteInputActions}>
                    <Button
                            id='addNoteBtn'
                            variant='outlined'
                            className={classes.addNote}
                            onClick={() => {
                                if (typeof onSave === 'function') {
                                    onSave();
                                }
                            }}
                        >
                            Save
                        </Button>
                </Grid>

            </Grid>
        </DialogWrapper>
    );
}

export default NoteInput;