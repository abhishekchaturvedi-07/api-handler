import {Paper, Typography, useMediaQuery} from '@material-ui/core'

import Rating from '@material-ui/lab'
import React from 'react';
import googleMapReact from 'google-map-react';
import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px')
    const coordinates ={lat:0, lng:0}
    return(
        <div className={classes.mapContainer}>
            <GoogleMapRect
                bootstrapURLKeys={{key:''}}
                defaultCenter={coordinates}
                center = {coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapRect>
        </div>
    )
}

export default Map
