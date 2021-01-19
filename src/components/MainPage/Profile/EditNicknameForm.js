import { Button, Box, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const useStyles = makeStyles(theme => ({
    fieldWrapper: {
        // margingBottom: theme.spacing(20),
    },
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

const EditNicknameForm = (props) => {
    const classes= useStyles();

    return (
        <form onSubmit={props.handleSubmit}>
            <Box className={classes.fieldWrapper}>
                <Field 
                    component={Input} 
                    margin="dense"
                    label="Введите новое имя"    
                    fullWidth
                    name={"nickname"}
                /> 
            </Box>
            <Box className={classes.submitWrapper}>
                <Button 
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                    onClick={props.handleCloseEdit}
                    size="small"
                >Изменить</Button>
            </Box>
        </form>
    )
}


export default reduxForm({
    form: "editNickname"
})(EditNicknameForm);