import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import { Button } from '@material-ui/core';
import { Container, CssBaseline, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const maxLengthLogin30 = maxLengthCreator(30);
const minLengthLogin3 = minLengthCreator(3);
const minLengthPassword5 = minLengthCreator(5);
const minLengthNickname3 = minLengthCreator(3);

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#000"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#000',
        color: '#fff',
    },
    isSignUp: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    signUp: {
        margin: theme.spacing(2, 0, 2),
    }
}))

const SignUpForm = (props) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AccessibilityNewIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Sign Up</Typography>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <Field validate={[required, maxLengthLogin30, minLengthLogin3]}
                    autoFocus placeholder={"Login"} name={"login"} component={Input} />
                <Field validate={[required, minLengthPassword5]}
                    type={"Password"} placeholder={"password"} name={"password"} component={Input} />
                <Field validate={[required, minLengthNickname3]}
                    name={"nickname"} placeholder={"Nickname"} component={Input}/>    
                <Button fullWidth className={classes.submit} type="submit" variant="contained">Sign Up</Button>
            </form>
        </div>
    </Container>
    )
}

export default reduxForm({
    form: "signup"
})(SignUpForm);