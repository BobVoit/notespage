


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    content: {
        marginTop: theme.spacing(6),
    },
    paper: {
        height: 140,
    },
    openDialogWindow: {
        marginTop: theme.spacing(1),
    },
    profileInfo: {
        paddingBottom: theme.spacing(12),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    },
    avatar: {
        height: theme.spacing(12),
        width: theme.spacing(12),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    avaName: {
        display: 'flex',
        alignItems: 'center',
    },
})


export default useStyles;