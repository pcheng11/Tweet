import React, { Component } from "react";
import GoogleMapReact from "google-map-react";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const K_WIDTH = 40;
const K_HEIGHT = 40;

const MyGreatPlace = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "5px solid #f44336",
  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 16,
  fontWeight: "bold",
  padding: 4
};



class Map extends Component {
  static defaultProps = {
    center: { lat: 37.09024, lng:-95.712891 },
    zoom: 4
  };
  render() {
    return <div className="map">
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <MyGreatPlace lat={this.props.center.lat} lng={this.props.center.lng} text={"A"} /* Kreyser Avrora */ />
          <AnyReactComponent lat={this.props.center.lat} lng={this.props.center.lng} text={"Kreyser Avrora"} />
        </GoogleMapReact>
      </div>;
  }
}

export default Map;
