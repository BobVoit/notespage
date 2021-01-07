import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import Button from '@material-ui/core/Button';

const maxLengthLogin30 = maxLengthCreator(30);
const minLengthLogin3 = minLengthCreator(3);
const minLengthPassword5 = minLengthCreator(5);


const LoginForm = (props) => {
    return (
        <div className="form-login-container">
            <div className="form-login-container__title">
                Login
            </div>
            <div className="form-login-container__form">
                <form onSubmit={props.handleSubmit} >
                    <div className="form-login-container__input">
                        <Field validate={[required, maxLengthLogin30, minLengthLogin3]}
                        placeholder={"Login"}  name={"login"} component={Input} />
                    </div>
                    <div className="form-login-container__input">
                        <Field validate={[required, minLengthPassword5]}
                        placeholder={"Password"} name={"password"} type={'password'} component={Input} />
                    </div>
                    <div className="form-login-container__button">
                        <Button type="submit" variant="contained">Войти</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "login",
})(LoginForm);