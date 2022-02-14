import React from 'react';
import {
    Grid,
    IconButton,
    Tooltip,
} from '@mui/material';

import {
    CreateOutlined as EditIcon,
    DeleteOutlined as DeleteIcon,
  } from '@mui/icons-material';

import { useStyles } from './styles';


function NoteItem (props:any) {
    const {
        note,
        onEditNote = () => {},
        onDeleteNote = () => {},
    } = props;
    const classes = useStyles();

    return (
        <Grid className={classes.notesListItem}>
            <Grid className={classes.noteListItemTexts}>
                <Grid className={classes.notesListItemTitle} >
                    { note.title }
                </Grid>

                <Grid className={classes.notesListItemTags} >
                    <i>{ note.tags }</i>
                </Grid>
            </Grid>

            <Grid className={classes.noteListItemIconSpace}>
                <Tooltip title={'Edit'}>
                    <IconButton
                        className={classes.notesListItemIcon}
                        aria-owns='actions-menu'
                        aria-haspopup='true'
                        onClick={(e) => {
                            onEditNote(note);
                        }}
                        
                    >
                        <EditIcon style={{ color: '#0c0644', width: '17px', height: '17px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title={'Delete'}>
                    <IconButton
                        className={classes.notesListItemIcon}
                        aria-owns='actions-menu'
                        aria-haspopup='true'
                        onClick={(e) => {
                            onDeleteNote(note);
                        }}
                    >
                        <DeleteIcon style={{ color: '#0c0644', width: '17px', height: '17px' }} />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    );
}

export default NoteItem;