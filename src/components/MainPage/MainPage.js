import React from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile/Profile';
import Notes from './Notes/Notes';
import { getAllNotes, addNote, deleteNote, setUserAvatar, 
    changeNickname, changeAvatar, deleteAvatar, getStats } from '../../redux/userReducer';


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    content: {
        marginTop: theme.spacing(6),
    },
    paper: {
        height: 140,
    },
    openDialogWindow: {
        marginTop: theme.spacing(1),
    },
    profileInfo: {
        paddingBottom: theme.spacing(12),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    },
    avatar: {
        height: theme.spacing(12),
        width: theme.spacing(12),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    avaName: {
        display: 'flex',
        alignItems: 'center',
    },
})




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
        this.props.getStats(this.props.id);
    }

    render() {
        const { classes, avatar, nickname, id, countNotes, dateLastNote, getStats } = this.props;

        return (
            <Container component="main" maxWidth="md" className={classes.root}>
                <CssBaseline />
                <div className={classes.content}>
                    <Grid wrap="wrap" container spacing={2} direction="row" justify="center">
                        <Grid xs={12} sm={12} item md={12} lg={4}>
                            <Profile
                                avatar={avatar}
                                nickname={nickname}
                                setUserAvatar={setUserAvatar}
                                changeNickname={changeNickname}
                                changeAvatar={changeAvatar}
                                deleteAvatar={deleteAvatar}
                                id={id}
                                getStats={getStats}
                                countNotes={countNotes}
                                dateLastNote={dateLastNote}
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
    setUserAvatar: PropTypes.func,
    getAllNotes: PropTypes.func, 
    addNote: PropTypes.func,
    deleteNote: PropTypes.func,
    changeNickname: PropTypes.func,
    changeAvatar: PropTypes.func,
    deleteAvatar: PropTypes.func,
    getStats: PropTypes.func,
}


const mapStateToProps = (state) => ({
    nickname: state.user.nickname,
    avatar: state.user.avatar,
    isAuth: state.user.isAuth,
    id: state.user.id,
    notes: state.user.notes,
    countNotes: state.user.countNotes,
    dateLastNote: state.user.dateLastNote,
})


export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
        setUserAvatar,
        getAllNotes, 
        addNote,
        deleteNote,
        changeNickname,
        changeAvatar,
        deleteAvatar,
        getStats
    }),
    withRouter,
    withAuthRedirect
)(MainPage);