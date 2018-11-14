import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import {PoseGroup} from 'react-pose'; //ANIMATIONS
import Box from '../animations/Box';

const PhotosCarousel = (props) => {
    return(
        <div className={props.classes.container}>
            <PoseGroup>
            {props.photos.map((photo, index) => {
                return(
                    <Box key={index} position={index}>
                    <Card className={props.classes.card}>
                        <div className={props.classes.img}>
                            <img src={photo.baseUrl} alt=""/>
                        </div>
                        <CardContent>
                            <Typography variant="caption" component="p">
                                {photo.filename}
                            </Typography>
                        </CardContent>
                    </Card>
                    </Box>
                )
            })}
            </PoseGroup>
        </div>
    )
}

export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll'
    },
    img: {
        width: '100%',
        height: '370px',
        overflow: 'hidden'
    },
    card: {
        minWidth: '300px',
        marginRight: '1em'
    }
})(PhotosCarousel);