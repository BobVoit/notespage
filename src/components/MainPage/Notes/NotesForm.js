import React from 'react';
import { TextArea, Input } from '../../common/FormsControl/FormsControl';
import { Box, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    submitWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    submit: {
        color: "#fff",
        backgroundColor: "#000",
        '&:hover': {
            color: "#000"
        },
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    }
}))

const NotesForm = (props) => {

    const classes = useStyles();
    

    return (
        <form onSubmit={props.handleSubmit}>
            <Box>
                <Field 
                    placeholder="Еnter the subject of your note"
                    component={Input}
                    name={"title"}
                />
                <Field 
                    placeholder="Enter your notes"
                    component={TextArea}
                    name={"message"}
                />
                <Box className={classes.submitWrapper}>
                    <Button
                        className={classes.submit}
                        variant="contained"
                        size="large"
                        type="submit"
                    >Add</Button>
                </Box>
            </Box>
        </form>
    )
}



export default reduxForm({
    form: "notesAddNote",
})(NotesForm);