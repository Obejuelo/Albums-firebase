import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setAlbums, clearAlbums, setAlbum} from '../initializers/actions';
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

        // setTimeout(() => {
        //     this.props.clearAlbums();
        // }, 5000);
    }

    loadPhotos(){
        Axios({
            url: `https://photoslibrary.googleapis.com/v1/albums`,
            method:'GET',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() { 
        return (
            <Albumelements 
                albums={this.props.albums} 
                album={this.props.setAlbum}
                mainAlbum={this.props.album}/>
        );
    }
}

const mapeStateToProps = (state) => ({
    albums: state.albums,
    token: state.token,
    album: state.album
})

const mapeDispatchToProps = {
    setAlbums,
    clearAlbums,
    setAlbum
}
 
export default connect(mapeStateToProps, mapeDispatchToProps)(Albums);