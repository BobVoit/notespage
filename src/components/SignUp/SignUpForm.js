import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import { Button } from '@material-ui/core';
import style from './SignUp.module.css';

const maxLengthLogin30 = maxLengthCreator(30);
const minLengthLogin3 = minLengthCreator(3);
const minLengthPassword5 = minLengthCreator(5);
const minLengthNickname3 = minLengthCreator(3);

const SignUpForm = (props) => {
    return (
        <div className={style.signup}>
            <div className={style.signup__title}>
                SignUp
            </div>
            <div className={style.signup__form_container}>
                <form onSubmit={props.handleSubmit} >
                    <div className={style.signup__form}>
                        <div className={style.signup__form_item}>
                            <Field validate={[required, maxLengthLogin30, minLengthLogin3]}
                            placeholder={"Login"} name={"login"} component={Input} />
                        </div>
                        <div className={style.signup__form_item}>
                            <Field validate={[required, minLengthPassword5]}
                            type={"Password"} placeholder={"password"} name={"password"} component={Input} />
                        </div>
                        <div className={style.signup__form_item}>
                            <Field validate={[required, minLengthNickname3]}
                            name={"nickname"} placeholder={"Nickname"} component={Input}/>    
                        </div>
                        <div className={style.signup__form_btn}>
                            <Button type="submit" variant="contained">SignUp</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "signup"
})(SignUpForm);