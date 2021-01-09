import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import Button from '@material-ui/core/Button';
import { Container, CssBaseline, Typography, Avatar, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom';
import useStyles from './styleLogin';

const maxLengthLogin30 = maxLengthCreator(30);
const minLengthLogin3 = minLengthCreator(3);
const minLengthPassword5 = minLengthCreator(5);


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