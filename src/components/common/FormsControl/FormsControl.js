import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const ErrorMessage = styled.span`
    color: #ff0000;
    font-size: 12px;
`;

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={"form-controls" + " " + (hasError ? "form-controls__error" : "")}>
            <div>
                <TextField {...input} {...props} 
                margin="normal" required variant="outlined" 
                label={props.labelName} fullWidth />
            </div>
            { hasError && <ErrorMessage>{meta.error}</ErrorMessage> } 
        </div>
    )
}