import React from 'react';
import { Box, makeStyles, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DialogNote from './DialogNote';
import CloseWindow from './CloseWindow';

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center '
    },
    root: {
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(2)
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 15
    },
    subtitle: {
        fontSize: 13
    }
}))



const FullScreenItem = ({ id, title, date, message }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [windowClose, setWindowClose] = React.useState(false);

    const deleteNote = () => {
        deleteNote(id);
    }

    const handleClickOpen = () => {
        setOpen(true);
        console.log(open);
    }

    const handleClickClose = () => {
        setOpen(false);
        console.log(open);
    }

    const handleClickOpenWindowClose = () => {
        setWindowClose(true);
        console.log(open);
    }

    const handleClickCloseWindowClose = () => {
        setWindowClose(false);
        console.log(open);
    }


    return (
        <>
            <ListItem 
                button={open ? false : true}
                dense={true}
                divider 
                // disabled
                className={classes.root}
                onClick={open ? null : handleClickOpen}
            >
                <Box>
                    <ListItemText   
                        classes={{
                            primary: classes.title,
                            secondary: classes.subtitle
                        }}
                        primary={title} 
                        secondary={date} 
                        />
                </Box>
                <ListItemSecondaryAction>
                    <DialogNote 
                        open={open} 
                        handleClickClose={handleClickClose}
                        title={title}
                        message={message}
                        date={date}
                    />
                </ListItemSecondaryAction>
                <ListItemSecondaryAction>
                    <IconButton 
                        onClick={handleClickOpenWindowClose} 
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                    <CloseWindow 
                        open={windowClose}
                        handleClose={handleClickCloseWindowClose}
                        deleteNote={deleteNote}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}



export default FullScreenItem;