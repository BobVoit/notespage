import React from 'react';
import { Box, makeStyles, Paper, Typography, IconButton, Button, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DialogNote from '../DialogNote';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(2)
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        <ListItem 
            // button 
            dense
            divider 
            className={classes.root}
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
            <Box className={classes.buttons}>
                <Button onClick={handleClickOpen}>More...</Button>
                <IconButton onClick={deleteNote}>
                    <DeleteForeverIcon />
                </IconButton>
            </Box>
            <DialogNote 
                open={open} 
                handleClickClose={handleClickClose}
                title={props.title}
                message={props.message}
                date={props.date}
            />
        </ListItem>
    )
}



export default FullScreenItem;