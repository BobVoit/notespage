import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';




const DeleteDialog = (props) => {

    const closeAndDeleteAvatar = () => {
        props.deleteAvatar(props.id);
        props.handleClose();
    }

    return (
        <Dialog 
            onClose={props.handleClose}
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Удаление записи</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Вы уверены, что хотите удалить эту запись?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Нет
            </Button>
            <Button onClick={closeAndDeleteAvatar} color="primary" autoFocus>
                Да
            </Button>
            </DialogActions>
        </Dialog>
    )
}



export default DeleteDialog;