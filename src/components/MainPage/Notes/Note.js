import React from 'react';
import { Box, makeStyles, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DialogNote from './DialogNote';

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



const FullScreenItem = (props) => {
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
        <>
            <ListItem 
                button={!open ? true : false}
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
                        primary={props.title} 
                        secondary={props.date} 
                        />
                </Box>
                <DialogNote 
                    open={open} 
                    handleClickClose={handleClickClose}
                    title={props.title}
                    message={props.message}
                    date={props.date}
                />
                <ListItemSecondaryAction>
                    <IconButton 
                        onClick={deleteNote} 
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}



export default FullScreenItem;