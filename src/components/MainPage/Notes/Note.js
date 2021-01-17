import React from 'react';
import { Box, makeStyles, Paper, Typography, IconButton, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DialogNote from './DialogNote';

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
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    }
}))



const Note = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const deleteNote = () => {
        props.deleteNote(props.id);
    }


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }

    return (
        <Box className={classes.root}>
            <Paper className={classes.content}>
                <Box>
                    <Box className={classes.titleWrapper}>
                        <Typography className={classes.field} variant="subtitle2">Заметка:</Typography>
                        <Typography variant="subtitle1">{props.title}</Typography>
                    </Box>
                    <DialogNote 
                        open={open} 
                        handleClickClose={handleClickClose}
                        title={props.title}
                        message={props.message}
                        date={props.date}
                    />
                    <Box className={classes.dateWrapper}>
                        <Typography className={classes.field} variant="subtitle2">Дата:</Typography>
                        <Typography variant="subtitle1">{props.date}</Typography>
                    </Box>
                </Box>
                <Box className={classes.buttons}>
                    <Button onClick={handleClickOpen}>More...</Button>
                    <IconButton onClick={deleteNote}>
                        <DeleteForeverIcon />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    )
}



export default Note;