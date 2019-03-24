import React from 'react';
import ReactDOM from 'react-dom';

class Google extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (<div ref={x => this.mapContainer = x} style={{
        width: "100vh",
        height: "100vw"
      }}></div>)
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapContainer, {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 3
    });

  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(document.getElementById('app'));
});
