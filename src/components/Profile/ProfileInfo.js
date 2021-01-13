import React from 'react';
import { Typography, Grid, Button, Card, CardContent, Avatar, makeStyles } from '@material-ui/core';
import AvatarForm from './AvaterForm';


const useStyles = makeStyles(theme => ({
    avatar: {
        height: theme.spacing(12),
        width: theme.spacing(12),
        marginRight: theme.spacing(2)
    },
    openDialogWindow: {
        marginTop: theme.spacing(1),
    },
}))



const ProfileInfo = (props) => {
    const classes = useStyles();
    console.log(props);

    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        <Avatar alt="Avatar" className={classes.avatar} src={props.avatar} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6">{props.nickname}</Typography>
                    </Grid>
                </Grid>
                {!this.props.avatar && <Button className={classes.openDialogWindow} onClick={this.handleClickOpen} >
                    Set avatar
                </Button>}
                <AvatarForm 
                    open={this.state.open}
                    handleClose={this.handleClose}
                    onSubmit={this.onSubmit}
                />
            </CardContent>
        </Card>
    )
}


export default ProfileInfo;