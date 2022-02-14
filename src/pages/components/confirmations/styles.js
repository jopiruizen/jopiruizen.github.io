import { makeStyles } from '@mui/styles';

const styles = (theme) => ({

    content: {
        display: 'flex',
        width: '400px',
        height: '160px',
        justifyContent: 'center',
        flexDirection: 'column !important',
        padding: '16px',
    },

    texts: {
        display: 'flex',
        flexDirection: 'column !important',
        width: '100%',
        height: '100px',
        marginBottom: '24px',
    },

    title: {
        width: '100%',
        fontSize: '14px',
        marginBottom: '24px',
    },

    message: {
        width: '100%',
        fontSize: '18px',
    },

    actions: {
        marginTop: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bottom: '0px'
    },
 
});

export default styles;
export const useStyles = makeStyles(styles);
 