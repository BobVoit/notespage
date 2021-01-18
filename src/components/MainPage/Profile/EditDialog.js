import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Button, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const useStyles = makeStyles(theme => ({
    submitWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    submit: {
        color: "#fff",
        backgroundColor: "#000",
        '&:hover': {
            color: "#000",
            backgroundColor: "#fff",
        }
    },
    
}))


const Input = ({input, meta, ...props}) => {
    return <TextField {...props} {...input} />
}

const EditDialog = (props) => {
    const classes= useStyles();
    console.log(props);


    return (
        <Dialog
            open={props.open}
            aria-labelledby="edit-dialog"
            maxWidth="xs"
            fullWidth
            onClose={props.handleCloseEdit}
        >
            <DialogTitle id="edit-dialog">Редактировать</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Изменить никнейм 
                </DialogContentText>
                <form onSubmit={props.handleSubmit}>
                    <Field 
                        component={Input} 
                        margin="dense"
                        label="Введите новое имя"    
                        fullWidth
                        name={"nickname"}
                    /> 
                    <Box className={classes.submitWrapper}>
                        <Button 
                            type="submit"
                            variant="contained"
                            className={classes.submit}
                            onClick={props.handleCloseEdit}
                        >Изменить</Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    )
}


export default reduxForm({
    form: "edit"
})(EditDialog);