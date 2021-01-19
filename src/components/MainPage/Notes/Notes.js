import React from 'react';
import { Box, Button, List } from '@material-ui/core';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import NotesForm from './NotesForm';
import Preloader from '../../common/Preloader/Preloader';
import { reset } from 'redux-form'; 
import FullScreenItem from './Note';
import FullScreenNotes from './FullScreenNotes';
 
const useStyles = theme => ({
    list: {
        flexGrow: 1,
        minHeight: 400,
        maxHeight: 400,
        overflow: "auto",
        backgroundColor: theme.palette.background.paper,
    },
    preloader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    openFullScreen: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});


class Notes extends React.Component {

    state = {
        open: false
    }

    openFullScreen = () => {
        this.setState({open: true});
    }

    closeFullScreen = () => {
        this.setState({open: false});
    }

    componentDidMount() {
        this.props.getAllNotes(this.props.userId);
    }

    addNote = (formData, dispatch) => {
        this.props.addNote(this.props.userId, formData.title, formData.message);
        dispatch(reset("notesAddNote"));
    }


    render() {
        const { classes } = this.props;

        if (this.props.notes === null) {
            return (
                <Box className={classes.preloader}> 
                    <Preloader />
                </Box>
            )
        }

        return (
            <>
                <List className={classes.list}>
                    {this.props.notes && this.props.notes.map(note => <FullScreenItem
                        key={note.id}
                        id={note.id}
                        deleteNote={this.props.deleteNote} 
                        title={note.title} 
                        message={note.message} 
                        date={note.messageDate}
                    />)}
                </List>
                <Box className={classes.openFullScreen}>
                    <Button 
                        onClick={this.openFullScreen}
                    >Open full screen</Button>
                </Box>
                <Box>
                    <NotesForm
                        onSubmit={this.addNote}
                    />
                </Box>
                <FullScreenNotes 
                    notes={this.props.notes}
                    deleteNote={this.props.deleteNote} 
                    closeFullScreen={this.closeFullScreen}
                    open={this.state.open}
                />
            </>
        )
    }
}






export default compose(
    withStyles(useStyles)
)(Notes);