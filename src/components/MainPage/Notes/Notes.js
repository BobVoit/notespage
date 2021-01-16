import React from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import Note from './Note';
import NotesForm from './NotesForm';
import Preloader from '../../common/Preloader/Preloader';
import { reset } from 'redux-form'; 
 
const useStyles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: 400,
        maxHeight: 400,
        overflow: "auto"
    },
    preloader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});


class Notes extends React.Component {

    componentDidMount() {
        console.log(this.props.userId);
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
                <Card className={classes.root}>
                    <CardContent>
                        {this.props.notes && this.props.notes.map(note => <Note 
                            key={note.id}
                            id={note.id}
                            deleteNote={this.props.deleteNote} 
                            title={note.title} 
                            message={note.message} 
                            date={note.messageDate}
                        />)}
                    </CardContent>
                </Card>
                <Box>
                    <NotesForm
                        onSubmit={this.addNote}
                    />
                </Box>
            </>
        )
    }
}






export default compose(
    withStyles(useStyles)
)(Notes);