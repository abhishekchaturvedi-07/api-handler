import {Paper, Typography, useMediaQuery} from '@material-ui/core'

import GoogleMapReact from 'google-map-react';
import LocationCityOutlinedIcon  from '@material-ui/icons';
import Rating from '@material-ui/lab'
import React from 'react';
import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px')
    const coordinates ={lat:0, lng:0}
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyBcc2b1zj2TyMRFzMhePiuhZsFxxzzpn44'}}
                defaultCenter={coordinates}
                center = {coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
