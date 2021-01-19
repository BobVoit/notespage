import { Button, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FieldFileInput } from '../../common/FormsControl/FormsControl';


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

const EdirAvatarForm = (props) => {
    const classes = useStyles();


    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component={FieldFileInput}
                name="avatar"
            />
            <Box className={classes.submitWrapper}>
                <Button 
                    className={classes.submit}
                    variant="contained"
                    size="small"
                    type="submit"
                >Изменить аватар</Button>
            </Box>
        </form>
    )
}



export default reduxForm({
    form: "editAvatar"
})(EdirAvatarForm);