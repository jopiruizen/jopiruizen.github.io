import { makeStyles } from '@mui/styles';

const styles = (theme) => ({

    dialogContent: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '16px',
    },
 
});

export default styles;
export const useStyles = makeStyles(styles);
 