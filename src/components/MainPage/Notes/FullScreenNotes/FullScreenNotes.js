import { AppBar, Dialog, IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../Note';
import FullScreenItem from './FullScreenItem';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: "#000",
        position: "relative"
    },
    toolbar: {
        backgroundColor: "#000",
    }
}))



const FullScreenNotes = (props) => {

    const classes = useStyles();

    return (
        <Dialog fullScreen open={props.open}>
            {/* <Container fixed> */}
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <IconButton color="inherit" onClick={props.closeFullScreen}>
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h5">Notes</Typography>
                    </Toolbar>
                </AppBar>
                <List dence>
                    {props.notes && props.notes.map(note => <FullScreenItem
                        key={note.id}
                        id={note.id}
                        deleteNote={props.deleteNote} 
                        title={note.title} 
                        message={note.message} 
                        date={note.messageDate}
                    />)}
                </List>
            {/* </Container> */}
        </Dialog>
    )
}



export default FullScreenNotes;