import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

// Redux
import {setPhoto, clearAlbum, clearPhoto} from '../initializers/actions';

// Components
import PhotosList from '../components/PhotosList';

class Album extends Component {

    componentDidUpdate(prevProps) {
        if(this.props.album) {
            if(process.env.NODE_ENV === 'production') {
                this.loadPhotos()
            } else {
                import('../data/photos').then(module => {
                    const photos = module.default.mediaItems
                    this.props.setPhoto(photos);
                })
            }
        }
    }

    loadPhotos() {
        Axios({
            method: 'POST',
            url: `https://photoslibrary.googleapis.com/v1/mediaItems:search`,
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            },
            data: {
                albumId: this.props.album.id
            }
        }).then(r => {
            console.log(r);
            this.props.setPhoto(r.data.mediaItems)
        })
    }

    render() {
        return (
            <PhotosList 
                album={this.props.album} 
                photos={this.props.photos}
                clearAlbum={this.props.clearAlbum}
                clearPhoto={this.props.clearPhoto}/>
        );
    }
}

const mapeStateToProps = (state) => ({
    album: state.album,
    token: state.token,
    photos: state.photos
})

const mapeDispatchToprops = {
    setPhoto,
    clearAlbum,
    clearPhoto
}

export default connect(mapeStateToProps, mapeDispatchToprops)(Album);