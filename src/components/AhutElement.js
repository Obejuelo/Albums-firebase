import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {ExitToApp} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';

const Styles = ({
    color: {
        color: 'white'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        alignItems: 'center'
    }
});

const AhutElement = (props) => {

    const renderButton = () => {
        if(props.userLogged) {
            return(
                [<Avatar src={props.imgUrl} key={2}/>,(<IconButton onClick={props.logout} className={props.classes.color} key={1}><ExitToApp/></IconButton>)]
            )
        }
        return(
            <Button color="primary" onClick={props.login} className={props.classes.color}>
                Login
            </Button>
        )
    }

    return renderButton()
}

export default withStyles(Styles)(AhutElement);