import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DialogWrapper from '../dialog';
import {
    Grid,
    Button,
} from '@mui/material';

import { useStyles } from './styles';

 
function Confirmation (props) {
    const classes = useStyles();
    const {
        open,
        onOk,
        onCancel,
        okLabel,
        cancelLabel,
        title,
        message,
    } = props;

    const [dialogOpen, setDialogOpen] = useState(open);


    useEffect(() => {
        console.log('NoteInput.useEFfect(open)', open);
        setDialogOpen(open);
    }, [open])

    return (
        <DialogWrapper
            open={dialogOpen}
            onClose={() => {
                if (typeof onCloseNote === 'function') {
                    onCloseNote();
                }
            }}
        >
            <Grid className={classes.content}>

                <Grid className={classes.contentTexts}>
                    <Grid className={classes.title}>
                        { title }
                    </Grid>
                    <Grid className={classes.message}>
                        { message }
                    </Grid>
                </Grid>
            
                <Grid className={classes.actions}>

                    <Button
                        id='cancel'
                        variant='outlined'
                        onClick={() => {
                            if (typeof onCancel === 'function') {
                                onCancel();
                            }
                        }}
                        style={{ marginRight: '24px' }}
                    >
                        {cancelLabel}
                    </Button>

                    <Button
                        id='cancel'
                        variant='outlined'
                        onClick={() => {
                            if (typeof onCancel === 'function') {
                                onOk();
                            }
                        }}
                    >
                        {okLabel}
                    </Button>

                   

                </Grid>

            </Grid>
        </DialogWrapper>
    );
}
 
Confirmation.propTypes = {
    open: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    title: PropTypes.string,
    message: PropTypes.string,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
};

Confirmation.defaultProps = {
    open: false,
    onCancel: () => {},
    onOk: () => {},
    okLabel: 'Ok',
    cancelLabel: 'Cancel',
    title: '',
    message: '',
};

export default Confirmation;