import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import Button from '@material-ui/core/Button';
import style from './Login.module.css';
import { Container, CssBaseline, Typography, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom';


const maxLengthLogin30 = maxLengthCreator(30);
const minLengthLogin3 = minLengthCreator(3);
const minLengthPassword5 = minLengthCreator(5);


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
        borderBottom: '2px solid #000',
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

const LoginForm = (props) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Log In</Typography>
                <form className={classes.form} onSubmit={props.handleSubmit}>
                    <Field validate={[required, maxLengthLogin30, minLengthLogin3]}
                        autoFocus placeholder={"Login"}  name={"login"} component={Input} />
                    <Field validate={[required, minLengthPassword5]}
                        placeholder={"Password"} name={"password"} type={'password'} component={Input} />
                    <Button fullWidth className={classes.submit} type="submit" variant="contained">Log In</Button>
                </form>
                <Box className={classes.isSignUp}>
                    <Typography>Don't have an account?</Typography>
                    <Button to="/signup" 
                        component={NavLink} 
                        fullWidth 
                        type="submit" 
                        variant="contained"
                        className={classes.signUp}
                    >Sign Up</Button>
                </Box>
            </div>
        </Container>
    )
}

export default reduxForm({
    form: "login",
})(LoginForm);