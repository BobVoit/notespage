import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import React from 'react';
import style from './Header.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)  // 1 - 8px
    },
    title: {
        flexGrow: 1
    },
    header: {
        backgroundColor: "#000"
    },
    button: {
        color: "#000",
        backgroundColor: "#fff"
    }
})


class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed" className={classes.header}>
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}
                        color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Your Notes</Typography>
                        <Box mr={3}> 
                            <Button color="inherit" variant="outlined">Log In</Button>
                        </Box>
                        <Button className={classes.button} color="inherit" variant="contained">Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}


export default withStyles(useStyles)(Header);