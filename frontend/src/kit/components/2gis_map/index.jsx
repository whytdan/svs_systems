import React, { useEffect, useState } from 'react';

const DG = window.DG;

const [x,y] = [42.882022, 74.577879];

export default function TwoGisMap() {

    const [map, setMap] = useState(null);

    const addMarker = (x, y, popup)=>{
        const p = DG.marker([x,y]).addTo(map);
        if(popup) p.bindPopup(popup);
    }

    useEffect(()=>{
        if(map){
            addMarker(x,y, "Фрунзе, 458, SVS systems ");
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
