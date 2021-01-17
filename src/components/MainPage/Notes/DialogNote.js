import { Dialog, DialogContent, DialogTitle, Divider, Typography, Box, DialogContentText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
    },
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
            <DialogTitle id="about-note">{props.title}</DialogTitle>
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
                    {/* <DialogContentText>
                        You can set my maximum width and whether to adapt or not.ddddddddddddd
                    </DialogContentText> */}
                </Box>
            </DialogContent>
        </Dialog>
    )
}


export default DialogNote;