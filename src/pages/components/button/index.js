import React from 'react';
import {
    Button as MUIButton,
} from '@mui/material';


function Button (props) {
    const {
        ...others,
    } = props;

    return (
        <MUIButton
            {...others}
        />
    )
}

export default Button;