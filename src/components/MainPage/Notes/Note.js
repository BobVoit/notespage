import React from 'react';
import { Box, makeStyles, Paper, Typography, IconButton  } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(2)
        }
    },
    content: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(0.2),
        paddingBottom: theme.spacing(0.2),
        display: 'flex',      
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    field: {
        color: "rgba(0, 0, 0, 0.54)",
        marginRight: theme.spacing(1)
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
}))



const Note = (props) => {
    const classes = useStyles();

    const deleteNote = () => {
        props.deleteNote(props.id);
    }

    return (
        <Box className={classes.root}>
            <Paper className={classes.content}>
                <Box>
                    <Box className={classes.titleWrapper}>
                        <Typography className={classes.field} variant="subtitle2">Title</Typography>
                        <Typography variant="subtitle1">{props.title}</Typography>
                    </Box>
                    <Box className={classes.messageWrapper}>
                        <Typography className={classes.field} variant="subtitle2">Notes</Typography>
                        <Typography variant="subtitle1">{props.message}</Typography>
                    </Box>
                    <Box className={classes.dateWrapper}>
                        <Typography className={classes.field} variant="subtitle2">Data</Typography>
                        <Typography variant="subtitle1">{props.date}</Typography>
                    </Box>
                </Box>
                <IconButton onClick={deleteNote}>
                    <DeleteForeverIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}



export default Note;