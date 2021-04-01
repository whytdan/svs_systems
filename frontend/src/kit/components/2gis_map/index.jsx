import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const DG = require('2gis-maps');

const useStyles = makeStyles(theme => ({
    map: {
        height: 500,
        width: '100%',
        [theme.breakpoints.down('md')]: {
            height: 200
          },
    }
}))

export default function TwoGisMap() {

    const [x,y] = [42.882022, 74.577879];
    const [map, setMap] = useState(null);
    const classes = useStyles();

    const addMarker = async (x, y, popup)=>{
        const p = await DG.marker([x,y]).addTo(map);
        if(popup) p.bindPopup(popup);
    }

    useEffect(()=>{
        if(map){
            addMarker(x,y, "Кыргызстан, г.Бишкек, ул. Фрунзе, 458, SVS systems ");
        }
    },[map])
    
    useEffect(()=>{
        DG.then(function () {
            setMap(DG.map('map', {
                center: [x, y],
                zoom: 18
            }));
        });

    },[]);

    return (
        <div id="map" className={classes.map}></div>
    )
}
