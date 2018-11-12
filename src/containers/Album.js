import React, { Component } from 'react';
import {connect} from 'react-redux';

// Redux 
import {setAlbum, clearAlbum} from '../initializers/actions';

class Album extends Component {
    
    render() { 
        return (
            <div></div>
        );
    }
}

const mapeStateToProps = (state) => ({
    album: state.album
})

const mapeDispatchToprops = {
    setAlbum,
    clearAlbum
}
 
export default connect(mapeStateToProps, mapeDispatchToprops)(Album);