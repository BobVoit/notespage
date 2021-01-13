import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';


const useStyles = theme => ({
    root: {
        height: "100%"
    }
});


class Notes extends React.Component {




    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
                <CardContent>
                    
                </CardContent>
            </Card>
        )
    }
}



export default compose(
    withStyles(useStyles)
)(Notes);