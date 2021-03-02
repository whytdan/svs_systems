import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} containerStyle={style}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
      </Map>
    );
  }
}

const style = {
  width: '100%',
  height: '420px',
  position: 'relative'
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDTUotrPOVgPlgiReJERKICuJik-UFhfFA',
})(MapContainer);
