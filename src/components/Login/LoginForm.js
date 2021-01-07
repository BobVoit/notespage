import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import Button from '@material-ui/core/Button';
import style from './Login.module.css';

const maxLengthLogin30 = maxLengthCreator(30);
const minLengthLogin3 = minLengthCreator(3);
const minLengthPassword5 = minLengthCreator(5);


const LoginForm = (props) => {
    return (
        <div className={style.login}>
            <div className={style.login__title}>
                Login
            </div>
            <div className={style.login__form_container}>
                <form className={style.login__form_container} onSubmit={props.handleSubmit} >
                    <div className={style.login__form}>
                        <div className={style.login__form_item}>
                            <Field validate={[required, maxLengthLogin30, minLengthLogin3]}
                            placeholder={"Login"}  name={"login"} component={Input} />
                        </div>
                        <div className={style.login__form_item}>
                            <Field validate={[required, minLengthPassword5]}
                            placeholder={"Password"} name={"password"} type={'password'} component={Input} />
                        </div>
                        <div className={style.login__form_btn}>
                            <Button type="submit" variant="contained">Войти</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "login",
})(LoginForm);