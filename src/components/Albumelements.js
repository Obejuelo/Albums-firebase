import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import AlbumCard from './AlbumCard';

import {PoseGroup} from 'react-pose'; //ANIMATIONS

import Box from '../animations/Box';

const AlbumElements = (props) => {
    return(
        <Grid container spacing={16} justify="center" className={props.classes.main}>
            <PoseGroup>
                {props.albums.map((album, index) => {
                    return(
                        <Box key={index} position={index} pose={props.mainAlbum ? 'closed' : 'open'}>
                            <AlbumCard album={album} setAlbum={props.album}/>
                        </Box>
                    )
                })}
            </PoseGroup>
        </Grid>
    )
}

export default withStyles({
    main: {
        width: '100%'
    }
})(AlbumElements);