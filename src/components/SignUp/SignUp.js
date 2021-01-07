import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';


const SignUp = (props) => {
    return (
        <div>
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