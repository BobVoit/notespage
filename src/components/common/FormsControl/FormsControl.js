import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={"form-controls" + " " + (hasError ? "form-controls__error" : "")}>
            <div>
                <TextField {...input} {...props} variant="outlined" label={props.labelName} />
            </div>
            { hasError && <span>{meta.error}</span> } 
        </div>
    )
}