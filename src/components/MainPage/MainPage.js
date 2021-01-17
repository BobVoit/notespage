import React from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import useStyles from './styleProfile';
import PropTypes from 'prop-types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile/Profile';
import Notes from './Notes/Notes';
import { getAllNotes, addNote, deleteNote, setUserAvatar } from '../../redux/userReducer';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }           
    }



    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.id;
            if (!id) {
                this.props.history.push("/login");
            }
        }
        
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="md" className={classes.root}>
                <CssBaseline />
                <div className={classes.content}>
                    <Grid wrap="wrap" container spacing={2} direction="row" justify="center">
                        <Grid xs={12} sm={12} item md={12} lg={4}>
                            <Profile
                                avatar={this.props.avatar}
                                nickname={this.props.nickname}
                                setUserAvatar={this.props.setUserAvatar}
                                id={this.props.id}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} item md={12} lg={8}>
                            <Notes 
                                notes={this.props.notes}
                                getAllNotes={this.props.getAllNotes}
                                userId={this.props.id}
                                addNote={this.props.addNote}
                                deleteNote={this.props.deleteNote}
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
    avatar: PropTypes.string,
    id: PropTypes.number,
}


const mapStateToProps = (state) => ({
    nickname: state.user.nickname,
    avatar: state.user.avatar,
    isAuth: state.user.isAuth,
    id: state.user.id,
    notes: state.user.notes,
})


export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
        setUserAvatar,
        getAllNotes, 
        addNote,
        deleteNote
    }),
    withRouter,
    withAuthRedirect
)(MainPage);