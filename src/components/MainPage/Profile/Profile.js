import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AvatarForm from './AvaterForm';
import EditIcon from '@material-ui/icons/Edit';
import EditDialog from './EditDialog';

const useStyles = makeStyles(theme => ({
    profileInfo: {
        paddingBottom: theme.spacing(3),   
        paddingTop: theme.spacing(3),
        // paddingLeft: theme.spacing(8),
        // paddingRight: theme.spacing(8),
    },
    avatar: {
        height: theme.spacing(12),
        width: theme.spacing(12),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    editWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
}))



const Profile = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const [openEdit, setOpenEdit] = React.useState(false);


    const handleOpenEdit = () => {
        setOpenEdit(true);
    }

    const handleCloseEdit = () => {
        setOpenEdit(false);
    }

    const onSubmit = (formData) => {
        if (formData.ava) {
            props.setUserAvatar(formData.ava, props.id);
        }
    }

    return (
        <Card className={classes.profileInfo}>
            <CardContent>
                <Grid justify="center" alignItems="center" direction="column" container>
                    <Grid item >
                        <Avatar alt="Avatar" className={classes.avatar} src={props.avatar}>
                            {!props.avatar && 
                            <Button size="small" className={classes.openDialogWindow} onClick={handleClickOpen} >
                                <AddAPhotoIcon />
                            </Button>}
                        </Avatar>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6">{props.nickname}</Typography>
                    </Grid>
                </Grid>                              
                <AvatarForm 
                    open={open}
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                />
            </CardContent>
            <Box className={classes.editWrapper}>
                <Button
                    size="small"
                    variant="contained"
                    endIcon={<EditIcon />}
                    onClick={handleOpenEdit}
                >Edit</Button>
            </Box>
            <EditDialog 
                open={openEdit}
                handleCloseEdit={handleCloseEdit}
                changeNickname={props.changeNickname}
                changeAvatar={props.changeAvatar}
                id={props.id}
            />
        </Card>
    )
}


export default Profile;