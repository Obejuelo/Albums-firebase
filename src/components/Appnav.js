import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Login from '../containers/login';

class Appnav extends Component {
    
    render() { 
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="h1" className={classes.grow}>
                            Albums
                        </Typography>
                        <Login/>
                    </Toolbar>
                </AppBar >
            </div>
        );
    }
}
 
export default withStyles({
    grow:{
        flexGrow: '1', textAlign: 'left', color:'white'
    }
})(Appnav);