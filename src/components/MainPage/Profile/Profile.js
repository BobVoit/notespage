import React from 'react';
import { Container, CssBaseline, Box, Typography, Grid, Button, Card, CardContent, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AvatarForm from './AvaterForm';

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
}))



const Profile = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const onSubmit = (formData) => {
        if (formData.ava) {
            props.setUserAvatar(formData.ava, props.id);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
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
        </Card>
    )
}


export default Profile;