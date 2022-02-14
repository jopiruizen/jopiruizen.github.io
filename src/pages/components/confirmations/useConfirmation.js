import React, { useState } from 'react';

import Confirmation from './';

function useConfirmation (props = {}) {
    const {
        title =  'Confirm',
        message = 'Are you sure?',
        okLabel = 'Ok',
        cancelLabel = 'Cancel',
        onOk = () => {},
        onCancel = () => {},
    } = props;

    const [open, setOpen] = useState(false);

    function renderConfirmation () {
        return (
            <Confirmation
                open={open}
                title={title}
                message={message}
                okLabel={okLabel}
                cancelLabel={cancelLabel}
                onOk={() => {
                    setOpen(false);
                    onOk();
                }}

                onCancel={() => {
                    setOpen(false);
                    onCancel();
                }}
            />
        )
    }

    function openConfirmation () {
        setOpen(true);
    }

    return {
        openConfirmation,
        renderConfirmation,
    }
}

export default useConfirmation;
