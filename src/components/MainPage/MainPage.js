import React from 'react';
import { Container, CssBaseline, Box, Typography, Grid, Button, Card, CardContent, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import useStyles from './styleProfile';
import { setUserAvatar } from '../../redux/userReducer';
import PropTypes from 'prop-types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile/Profile';
import Notes from './Notes/Notes';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }

        this.notes = [
            {
                id: 1,
                title: "Вчера",
                message: "Купил новый автомобиль"
            },
            {
                id: 2,
                title: "Вчера",
                message: "Купил новый автомобиль"
            },
            {
                id: 3,
                title: "Вчера",
                message: "Купил новый автомобиль"
            },
           
        ];
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

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="md" className={classes.root}>
                <CssBaseline />
                <div className={classes.content}>
                    <Grid container spacing={2} direction="row" justify="center">
                        <Grid item xs={8}>
                            <Notes 
                                notes={this.notes}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Profile
                                avatar={this.props.avatar}
                                nickname={this.props.nickname}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }
}   

MainPage.propTypes = {
    nickname: PropTypes.string,
    isAuth: PropTypes.bool,
    token: PropTypes.string,
    avatar: PropTypes.string
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
)(MainPage);