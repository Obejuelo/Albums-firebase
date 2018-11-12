import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setAlbums, clearAlbums} from '../initializers/actions';
import Axios from 'axios';

// Components
import Albumelements from '../components/Albumelements';

class Albums extends Component {

    componentDidMount(){
        // create-react-app detecta si estamos en producción o no
        if(process.env.NODE_ENV === 'production') {
            this.loadPhotos();
        } else {
            // Import dinamico dentro de una condición
            // Siempre retorna una promesa con un module
            import('../data/albums').then(module => {
                let albums = module.default
                // Dispatch al action setAlbum
                this.props.setAlbums(albums.albums)
            })
        }
    }

    loadPhotos(){
        Axios({
            url: `https://photoslibrary.googleapis.com/v1/albums`,
            method:'GET',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        })
        .then(console.log())
        .catch(console.log())
    }

    render() { 
        return (
            <Albumelements albums={this.props.albums}/>
        );
    }
}

const mapeStateToProps = (state) => ({
    albums: state.albums,
    token: state.token
})

const mapeDispatchToProps = {
    setAlbums,
    clearAlbums
}
 
export default connect(mapeStateToProps, mapeDispatchToProps)(Albums);