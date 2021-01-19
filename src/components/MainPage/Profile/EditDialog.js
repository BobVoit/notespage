import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Button, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import EditNicknameForm from './EditNicknameForm';
import EditAvatarForm from './EditAvatarForm';

const useStyles = makeStyles(theme => ({
    submitWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    submit: {
        color: "#fff",
        backgroundColor: "#000",
        '&:hover': {
            color: "#000",
            backgroundColor: "#fff",
        }
    },  
}))


const Input = ({input, meta, ...props}) => {
    return <TextField {...props} {...input} />
}

const EditDialog = (props) => {
        

    const changeNickname = (formData) => {
        if (props.id, formData.nickname) {
            props.changeNickname(props.id, formData.nickname);
        }
    }

    const changeAvatar = (formData) => {
        if (formData.avatar && props.id) {
            props.changeAvatar(props.id, formData.avatar);
        }
    }
    return (
        <Dialog
            open={props.open}
            aria-labelledby="edit-dialog"
            maxWidth="xs"
            fullWidth
            onClose={props.handleCloseEdit}
        >
            <DialogTitle id="edit-dialog">Редактировать</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Изменить аватар
                </DialogContentText>
                <EditAvatarForm 
                    onSubmit={changeAvatar}
                />

                <DialogContentText>
                    Изменить никнейм 
                </DialogContentText>
                <EditNicknameForm 
                    onSubmit={changeNickname}
                />
            </DialogContent>
        </Dialog>
    )
}


export default EditDialog;