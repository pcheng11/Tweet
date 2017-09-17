import React, { Component } from "react";
import GoogleMap from "google-map-react";
import MyGreatPlace from "./my_great_place.jsx";
import styles from '../styles/mapStyles.json';

class Map extends Component {
  static defaultProps = {
    center: { lat: 37.09024, lng:-95.712891 },
    zoom: 4
    };

  render() {

    const data = this.props.data;
    var dots;
    
    if(data){
      dots = data.map((dot,index) => {
        console.log(dot.LOCATION)
        return(dot.LOCATION =="None" ? null :(<MyGreatPlace key={index} lat={dot.LOCATION[0]} lng={dot.LOCATION[1]} text={""}/>))
      });       
    
    }else{
      dots = null;
    }
    
    return(
       <div className="map">
        <GoogleMap
        defaultCenter={this.props.center} 
        defaultZoom={this.props.zoom}
        defaultOptions={{ styles: styles }}>
          {dots}
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
