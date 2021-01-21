import { AppBar, Button, Container, Toolbar, Typography, Box, Avatar, Hidden } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../redux/userReducer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)  // 1 - 8px
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem'
        }
    },
    header: {
        backgroundColor: "#000"
    },
    toolbar: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    button: {
        color: "#000",
        backgroundColor: "#fff"
    },
    logo: {
        marginRight: theme.spacing(1),
        backgroundColor: "#fff",
        color: "#000",
        fontWeight: "700"
    },
    linkProfile: {
        color: "#fff",
    },
    signOut: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem'
        }
    }
})


class Header extends React.Component {

    logout = () => {
        this.props.logout(this.props.token)
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="relative" className={classes.header}>
                <Container fixed>
                    <Toolbar className={classes.toolbar}>
                        {/* <Box> */}
                            <Avatar className={classes.logo}>YN</Avatar>
                            <Hidden xsDown>
                                <Typography variant="h6" className={classes.title}>YOUR NOTES</Typography>
                            </Hidden>
                            <Hidden xsUP>
                                <Typography variant="h6" className={classes.title}></Typography>
                            </Hidden>
                        {/* </Box> */}
                        {!this.props.isAuth 
                        ? <>
                            <Box mr={3}> 
                                <Button  
                                    to="/login"
                                    component={NavLink} 
                                    color="inherit" 
                                    variant="outlined"
                                >Log In</Button>
                            </Box>
                            <Button 
                                to="/signup"
                                component={NavLink} 
                                className={classes.button} 
                                color="inherit"
                                variant="contained"
                            >Sign Up</Button>
                        </>
                        : <>
                            <Box mr={1}>
                                <Typography>
                                    <Button className={classes.linkProfile} component={NavLink} to="/mainpage">
                                        {this.props.nickname}
                                    </Button>
                                </Typography>
                            </Box>
                            <Box mr={3}> 
                                <Button 
                                    className={classes.signOut} 
                                    onClick={this.logout}
                                    color="inherit" 
                                    variant="outlined"
                                >Sign Out</Button>
                            </Box>
                        </>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    nickname: state.user.nickname, 
    token: state.user.token
})

Header.propTypes = {
    isAuth: PropTypes.bool,
    nickname: PropTypes.string,
    token: PropTypes.string
}

export default compose(
    connect(mapStateToProps, {
        logout
    }), withStyles(useStyles))(Header);