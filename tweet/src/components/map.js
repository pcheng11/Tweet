import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MyGreatPlace from "./my_great_place.jsx";


class Map extends Component {
  static defaultProps = {
    center: { lat: 37.09024, lng:-95.712891 },
    zoom: 4
  };

  render() {

    const data = this.props.data;
    var dots;
    
    if(data){
      console.log(data);
      dots = data.data.map((dot,index) => {
        return(
          <MyGreatPlace
          key={index}
          lat={JSON.parse(dot.Loc)[0]}
          lng={JSON.parse(dot.Loc)[1]}
          text={""}
        />)
      });
    }else{
      dots = null;
    }
    
    return <div className="map">
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          {dots}
        </GoogleMapReact>
      </div>;
  }
}

export default Map;
