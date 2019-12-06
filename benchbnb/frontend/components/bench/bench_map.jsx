import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    const that = this;
    this.map.addListener('idle', function() {

      const latLngBounds = this.getBounds();
      const northEast = latLngBounds.getNorthEast();
      const southWest = latLngBounds.getSouthWest();
      const bounds = {
        northEast: {
          lat: northEast.lat(),
          lng: northEast.lng()
        },
        southWest: {
          lat: southWest.lat(),
          lng: southWest.lng()
        }
      };

      that.props.updateBounds(bounds);
      that.props.fetchBenches(that.props.filters);
    });

    // this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props){
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  render() {
    return (
      <div id="map-container" ref={map => this.mapNode = map}>
      </div>
    )
  }


}