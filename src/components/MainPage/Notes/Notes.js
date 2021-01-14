import React from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import Note from './Note';
import NotesForm from './NotesForm';
 
const useStyles = theme => ({
    root: {
        minHeight: "25vw",
        maxHeight: "25vw",
        overflow: "auto"
    }
});


class Notes extends React.Component {

    componentDidMount() {
        console.log(this.props.userId);
        this.props.getAllNotes(this.props.userId);
    }

    addNote = (formData) => {
        this.props.addNote(this.props.userId, formData.title, formData.message);
    }


    render() {
        const { classes } = this.props;

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