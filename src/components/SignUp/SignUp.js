import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import style from './SignUp.module.css';
import { signUp, setSignUp } from '../../redux/userReducer';

const SignUp = (props) => {
    const onSubmit = (formData) => {
        props.signUp(formData.login, formData.password, formData.nickname);
    }

    if (props.isSignUp) {
        props.setSignUp(false);
        return <Redirect to="/login" />
    }

    return (
        <div className={style.signup__container}>
            <SignUpForm onSubmit={onSubmit} />
        </div>
    )
}

SignUp.propTypes = {
    isAuth: PropTypes.bool,
}


const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    isSignUp: state.user.isSignUp
})

export default connect(mapStateToProps, {
    signUp,
    setSignUp
})(SignUp);