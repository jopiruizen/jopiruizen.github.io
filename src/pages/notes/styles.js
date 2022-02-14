import { makeStyles } from '@mui/styles';

const styles = (theme) => ({

    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FAFAFA',
    },

    content: {
        display: 'flex',
        flexDirection: 'column !important',
        maxWidth: '600px',
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        padding: '32px',
    },

    notelistContent: {
        width: '100%',
        height: '98vh',
    },
    notelistFooter : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#9A9A9A',
        bottom: 0,
    },

    buttonSpace: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    addNote: {
        width: '100%',
    },

    /* NOTE LIST */

    notesList: {
        display: 'flex',
        flexDirection: 'column !important',
        width: '100%',
        maxHeight: '600px',
    },



    notesListItem: {
        display: 'flex',
        justifyContent: 'center',
        color: '#7A7A7A',
        width: '100%',
        height: '60px',
        border: '1px solid #F1F1F1',
        borderRadius: '2px',
        marginBottom: '20px',
        padding: '12px',
        
        // cursor: 'pointer',
    },

    noteListItemTexts: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column !important',   
    },
    
    noteListItemIconSpace: {
        display: 'flex',
    },

    notesListItemTitle: {
        width: '100%',
        fontSize: '18px',
        marginBottom: '4px',
    },

    notesListItemTags: {
        fontSize: '11px',
        color: '#7A7A7A',
        width: '100%',
    },

    notesListItemIcon: {
        width: '32px',
        height: '32px',
    },

    /* NOTE Input */

    noteInput: {
        width: '560px',
        height: '600px',
        padding: '16px',
    },

    noteInputTitle: {
        width: '100%',
        marginBottom: '24px',
    },

    noteInputContent: {
        width: '100%',
        marginTop: '24px',
        marginBottom: '24px',
    },

    noteInputActions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },


    textInput: {
        width: '100%',
    },
});

export default styles;
export const useStyles = makeStyles(styles);
 