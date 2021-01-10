import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#000"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        borderBottom: '2px solid #000',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#000',
        color: '#fff',
    },
    isSignUp: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    signUp: {
        margin: theme.spacing(2, 0, 2),
    }
}))


export default useStyles;