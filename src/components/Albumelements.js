import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import AlbumCard from './AlbumCard';

const AlbumElements = (props) => {
    return(
        <Grid container spacing={16} justify="center" className={props.classes.main}>
            {props.albums.map((album, index) => {
                return <AlbumCard key={index} album={album} setAlbum={props.setAlbum}/>
            })}
        </Grid>
    )
}

export default withStyles({
    main: {
        width: '100%'
    }
})(AlbumElements);