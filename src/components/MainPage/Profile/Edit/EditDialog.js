import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Button, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import EditNicknameForm from './EditNicknameForm';
import EditAvatarForm from './EditAvatarForm';
import DeleteDialog from './DeleteDialog';

const useStyles = makeStyles(theme => ({ 
    deleteAvatar: {
        color: "#fff",
        backgroundColor: "#000",
        '&:hover': {
            color: "#000",
            backgroundColor: "#fff",
        }
    }
}))


const Input = ({input, meta, ...props}) => {
    return <TextField {...props} {...input} />
}

const EditDialog = (props) => {
    const classes = useStyles();
    const [openDeleteDialog, setDeleteDialog] = React.useState(false); 

    const handleClose = () => {
        setDeleteDialog(false);
    }

    const handleOpen = () => {
        setDeleteDialog(true);
    }

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
                {props.avatar && <>
                    <DialogContentText>
                        Сменить аватар
                    </DialogContentText>
                    <EditAvatarForm 
                        onSubmit={changeAvatar}
                    />
                    <Button 
                        className={classes.deleteAvatar}
                        onClick={handleOpen}
                    >Удалить аватар</Button>
                </>}
                <DialogContentText>
                    Сменить никнейм 
                </DialogContentText>
                <EditNicknameForm 
                    onSubmit={changeNickname}
                />
            </DialogContent>
            <DeleteDialog 
                open={openDeleteDialog}
                handleClose={handleClose}
                deleteAvatar={props.deleteAvatar}
                id={props.id}
            />
        </Dialog>
    )
}


export default EditDialog;