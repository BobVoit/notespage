import React from 'react';
import { Container, CssBaseline, Box, Typography, Grid, Button, Card, CardContent, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import AvatarForm from './AvaterForm';
import useStyles from './styleProfile';
import { setUserAvatar } from '../../redux/userReducer';
import PropTypes from 'prop-types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Notes from './Notes/Notes';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(this.props);
        if (!id) {
            id = this.props.id;
            if (!id) {
                this.props.history.push("/login");
            }
        }
        console.log(this.props.id);
    }

    onSubmit = (formData) => {
        // if (formData.ava) {
        //     if (formData.ava.type.startsWith('image/')) {
        //         let reader = new FileReader();
        //         reader.onload = () => {
        //             let dataURL = reader.result;
        //             this.props.setUserAvatar(dataURL, this.props.token);
        //         }
        //         reader.readAsDataURL(formData.ava);
        //     }
        // }
        console.log(formData.ava);
        if (formData.ava) {
            this.props.setUserAvatar(formData.ava, this.props.id);
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        const { classes } = this.props;

        return (
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
                        </Grid>
                        <Grid item xs={6}>
                            <Notes />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }
}   

Profile.propTypes = {
    nickname: PropTypes.string,
    isAuth: PropTypes.bool,
    token: PropTypes.string
}


const mapStateToProps = (state) => ({
    nickname: state.user.nickname,
    avatar: state.user.avatar,
    isAuth: state.user.isAuth,
    id: state.user.id,
})


export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
        setUserAvatar
    }),
    withRouter,
    withAuthRedirect
)(Profile);