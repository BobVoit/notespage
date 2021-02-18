import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import React from 'react';






const CloseWindow = ({ deleteNote, handleClose, open }) => {

    const closeAndDelete = () => {
        deleteNote();
        handleClose();
    }

    return (
        <Dialog 
            onClose={handleClose}
            open={open}
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
                <Button onClick={handleClose} color="primary">Нет</Button>
                <Button onClick={closeAndDelete} color="primary" autoFocus>Да</Button>
            </DialogActions>
        </Dialog>
    )
}



export default CloseWindow;