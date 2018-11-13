import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import posed from 'react-pose'; //ANIMATIONS

// Configuración de animaciones con POSE
const Box = posed.div({
    open: {
        opacity: 1,
        height: 'auto'
    },
    closed: {
        opacity: 0,
        height: 0
    }
})

const AlbumCard = (props) => {

    const showPhotos = () => {
        // console.log('click');
        props.setAlbum(props.album)
    }

    return (
        <Box pose={'open'}>
        <Card className={props.classes.cardWidth} onClick={showPhotos}>
            <CardMedia className={props.classes.media} image={props.album.coverPhotoBaseUrl}/>
            <CardContent>
                <Typography variant="h5" component="h2">
                        {props.album.title}
                </Typography>
                <Typography component="p">
                        {props.album.mediaItemsCount} photo(s)
                </Typography>
            </CardContent>
        </Card>
        </Box>
    )
}

export default withStyles({
    cardWidth: {
        maxWidth: '300px',
        minWidth: '300px',
        margin: '1em'
    },
    media: {
        minHeight: '200px',
        cursor: 'pointer'
    }
})(AlbumCard)