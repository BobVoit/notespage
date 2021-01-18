import { Dialog, DialogContent, DialogTitle, Divider, Typography, Box, Button, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    message: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
    },
    dateWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    dateTitle: {
        marginRight: theme.spacing(1)
    },
    close: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
    }
}))


const DialogNote = (props) => {

    const classes = useStyles();

    return (
        <Dialog 
            open={props.open} 
            onClose={props.handleClickClose} 
            fullWidth
            aria-labelledby="about-note" 
            className={classes.root}
            maxWidth={"sm"}
        >
            <DialogTitle className={classes.title} id="about-note">{props.title}</DialogTitle>
            <DialogContent>
                <Box className={classes.dateWrapper}>
                    <Typography className={classes.dateTitle} variant="subtitle2">Дата:</Typography>
                    <Typography>{props.date}</Typography>
                </Box>
                <Divider />
                <Box>
                    <Typography className={classes.dateTitle} variant="subtitle2">Заметка:</Typography>
                    <Box>
                        <Typography className={classes.message}>{props.message}</Typography>       
                    </Box> 
                    
                </Box>
            </DialogContent>
            <DialogActions>
                <Button size="large" className={classes.close} onClick={props.handleClickClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}


export default DialogNote;