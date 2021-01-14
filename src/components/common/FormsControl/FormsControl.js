import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InputMU from '@material-ui/core/Input';

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


export const TextArea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
      <div className={"form-controls" + " " + (hasError ? "form-controls__error" : "")}>
          <div>
              <TextField {...input} {...props} 
              margin="normal" required 
              variant="outlined" 
              rows={2}
              multiline
              label={props.labelName}
              fullWidth />
          </div>
          { hasError && <ErrorMessage>{meta.error}</ErrorMessage> } 
      </div>
  )
}


export class FieldFileInput extends React.Component{
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(e) {
      const { input: { onChange } } = this.props;
      onChange(e.target.files[0]);
    }
  
    render() {
      const { input: { value } } = this.props
      const { input,label, required, meta } = this.props  //whatever props you send to the component from redux-form Field
      return(
       <div><label>{label}</label>
       <div>
         <InputMU
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={this.onChange}
         />
       </div>
       </div>
      )
   }
}