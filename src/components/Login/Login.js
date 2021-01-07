import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import style from './Login.module.css';

const Login = (props) => {
    return (
        <div className={style.login__container}>
            <LoginForm />
        </div>
    )
}

Login.propTypes = {
    isAuth: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth
})



export default connect(mapStateToProps, {

})(Login);