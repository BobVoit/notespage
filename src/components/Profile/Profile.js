import React from 'react';
import { Container, CssBaseline, Box, Typography, Grid, Button, Card, CardContent, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AvatarForm from './AvaterForm';
import useStyles from './styleProfile';
import { setAvatar } from '../../redux/userReducer';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    onSubmit = (formData) => {
        var reader = new FileReader();
        reader.onload = () => {
            let dataURL = reader.result;
            this.props.setAvatar(dataURL);
        }
        reader.readAsDataURL(formData.ava);
    }

    handleClickOpen = () => {
        console.log(this.state.open);
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        const { classes } = this.props;

        return (
            <>
            {!this.props.isAuth && <Redirect to="/login" />}
            <Container component="main" maxWidth="md" className={classes.root}>
                <CssBaseline />
                <div className={classes.content}>
                    <Grid container spacing={2} direction="row" justify="center">
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Avatar alt="Avatar" className={classes.avatar} src={this.props.avatar} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6">{this.props.nickname}</Typography>
                                        </Grid>
                                    </Grid>
                                    {!this.props.avatar && <Button onClick={this.handleClickOpen} >Set avatar</Button>}
                                    <AvatarForm 
                                        open={this.state.open}
                                        handleClose={this.handleClose}
                                        onSubmit={this.onSubmit}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            </>
        )
    }
}   


const mapStateToProps = (state) => ({
    nickname: state.user.nickname,
    avatar: state.user.avatar,
    isAuth: state.user.isAuth
})


export default compose(
    connect(mapStateToProps, {
        setAvatar
    }),
    withStyles(useStyles),
)(Profile);