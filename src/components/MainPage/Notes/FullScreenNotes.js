import { AppBar, Dialog, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import FullScreenItem from './Note';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: "#000",
        position: "relative",
        marginBottom: theme.spacing(4)
    },
    toolbar: {
        backgroundColor: "#000",
    }
}))



const FullScreenNotes = ({ open, closeFullScreen, notes, deleteNote }) => {

    const classes = useStyles();

    return (
        <Dialog fullScreen open={open}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton color="inherit" onClick={closeFullScreen}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5">Notes</Typography>
                </Toolbar>
            </AppBar>
            <List>
                {notes && notes.map(note => <FullScreenItem
                    key={note.id}
                    id={note.id}
                    deleteNote={deleteNote} 
                    title={note.title} 
                    message={note.message} 
                    date={note.messageDate}
                />)}
            </List>
        </Dialog>
    )
}



export default FullScreenNotes;