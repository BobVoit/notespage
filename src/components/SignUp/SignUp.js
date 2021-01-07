import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import style from './SignUp.module.css';

const SignUp = (props) => {
    return (
        <div className={style.signup__container}>
            <SignUpForm />
        </div>
    )
}

SignUp.propTypes = {
    isAuth: PropTypes.bool,
}


const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
})

export default connect(mapStateToProps, {
})(SignUp);