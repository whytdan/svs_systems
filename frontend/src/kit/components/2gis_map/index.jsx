import React, { useEffect, useState } from 'react';

const DG = require('2gis-maps');

export default function TwoGisMap() {

    const [x,y] = [42.882022, 74.577879];
    const [map, setMap] = useState(null);

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
        <div id="map" style={{width: '100%', height: 500}}></div>
    )
}
