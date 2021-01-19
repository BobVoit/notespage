import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Box } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { FieldFileInput } from '../../common/FormsControl/FormsControl';

const useStyles = makeStyles(theme => ({
    cancelWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    form: {
        display: 'flex',      
    },
    submit: {
        marginLeft: theme.spacing(4),
        color : "#fff",
        backgroundColor: "#000",
    },
    cancel: {
        marginTop: theme.spacing(1)
    }
}))

const AvatarForm = (props) =>  {

    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-set-ava">
            <DialogTitle id="form-dialog-set-ava">Select an image</DialogTitle>
            <DialogContent>
                <form className={classes.form} onSubmit={props.handleSubmit} >
                    <Field name={"ava"} component={FieldFileInput} />
                    <Button className={classes.submit} onClick={props.handleClose} size="small" type="submit" variant="contained">Set</Button>
                </form>
                <Box className={classes.cancelWrapper}>
                    <Button size="small" className={classes.cancel} onClick={props.handleClose} variant="outlined">Cancel</Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}


export default reduxForm({
    form: "avatar"
})(AvatarForm);