import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const AlbumCard = (props) => {


    const showPhotos = () => {
        console.log('click');
    }

    return (
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