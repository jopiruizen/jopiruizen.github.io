import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
    Dialog as MuiDialog,
    Grid,
} from '@mui/material';

import { useStyles } from './styles';

function Dialog (props) {
    const {
        open,
        children,
        onClose,
        disableBackdropDoubleClick = true,
        ...otherProps
    } = props;

    const dialogRef = useRef(null);
    const classes = useStyles();
    useEffect(() => {
        if (open === true) {
            setTimeout(() => {
                if (dialogRef && dialogRef.current) {
                    dialogRef.current.ondblclick = (e) => {
                        if (disableBackdropDoubleClick) return;
                        if (!e.srcElement) return;
                        if (!e.srcElement.className) return;
                        const className = e.srcElement.className;
                        if (typeof className.indexOf === 'function' &&
                             className.indexOf('MuiDialog-scrollPaper') !== -1) {
                                if (typeof onClose === 'function') {
                                    onClose();
                                }
                        }
                    };
                }
            }, 1000);
        }

    }, [open]);

    return (
        <React.Fragment>
            <MuiDialog
                ref={dialogRef}
                disableBackdropClick={false}
                open={open}

                onClose={() => {
                    if (typeof onClose === 'function') {
                        onClose();
                    }
                }}
                {...otherProps}
            >
                <Grid className={classes.dialogContent}>
                    { children }
                </Grid>
            </MuiDialog>
        </React.Fragment>
       
    );
}

/*
Dialog.propTypes = {
    open: PropTypes.bool,
    onClose: () => {},
    children: PropTypes.any,
};

Dialog.defaultProps = {
    open: false,
    onClose: () => {},
    children: null,
};
*/
export default Dialog;
