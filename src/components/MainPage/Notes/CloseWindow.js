import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import React from 'react';






const CloseWindow = (props) => {

    const closeAndDelete = () => {
        props.deleteNote();
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
                Disagree
            </Button>
            <Button onClick={closeAndDelete} color="primary" autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
    )
}



export default CloseWindow;