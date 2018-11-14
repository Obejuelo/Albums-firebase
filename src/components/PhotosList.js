import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

// Components
import PhotosCarousel from './PhotosCarousel';

const PhotosList = (props) => {

    function clear() {
        props.clearAlbum()
        props.clearPhoto()
    }

    const total = props.photos.length;

    return(
        <div>
            { props.album && [
                    <Typography key={1} variant="h4" component="h2">{props.album.title}</Typography>,
                    <Button key={2} onClick={clear}>Regresar</Button>,
                    <Typography key={3} variant="headline" component="h3">Fotos del album</Typography>,
                    <Typography key={4} variant="caption" component="p">{total}fotos</Typography>,
                    <PhotosCarousel key={5} photos={props.photos}/>
                ]
            }

        </div>
    )
}

export default withStyles({})(PhotosList);