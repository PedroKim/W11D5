export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach(bench => {
      if (!this.markers[bench.id]) this.createMarkerFromBench(bench);
    });
  }

  createMarkerFromBench(bench) {
    const {lat, lng, description} = bench;
    const marker = new google.maps.Marker({
      position: {lat, lng},
      title: description
    });
    this.markers[bench.id] = marker;
    marker.setMap(this.map);
  }
}