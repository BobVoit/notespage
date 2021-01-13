import React from 'react';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(1)
    },
    content: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(0.2),
        paddingBottom: theme.spacing(0.2)
    }
}))



const Note = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Paper className={classes.content}>
                <Typography>{props.title}</Typography>
                <Typography>{props.message}</Typography>
            </Paper>
        </Box>
    )
}



export default Note;