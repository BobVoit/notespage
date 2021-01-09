import React from 'react';
import { Container, CssBaseline, Box, Typography, Button, Grid, Paper, Card, CardContent, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    content: {
        marginTop: theme.spacing(6)
    },
    paper: {
        height: 140,
    },
    avaName: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: theme.spacing(10),
        width: theme.spacing(10),
        marginRight: theme.spacing(2)
    },
})

class Profile extends React.Component {
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
                                    <Grid container spacing={0}>
                                        <Grid item xs={3}>
                                            <Avatar className={classes.avatar} src={this.props.avatar} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6">{this.props.nickname}</Typography>
                                        </Grid>
                                    </Grid>
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
        
    }),
    withStyles(useStyles))(Profile);