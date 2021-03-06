import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { login } from '../../redux/userReducer';

const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        login(formData.login, formData.password);
    }

    if (isAuth) {
        return <Redirect to="/mainpage" />
    }

    return (
        <div >
            <LoginForm onSubmit={onSubmit} />
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
    login,
})(Login);