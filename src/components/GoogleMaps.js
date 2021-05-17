import React from "react";
import "./GoogleMaps.css";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { IconLayer } from "@deck.gl/layers";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2FieXNpbmdoMjk4IiwiYSI6ImNrb2xybDk3bDAyY3Yybm80bnplaXg5dnAifQ.W1ruChOZ_LrlxvH-8J6VbA'
  });
const INITIAL_VIEW_STATE = {
  longitude: 77.594566,
  latitude: 12.971599,
  zoom: 11,
  pitch: 0,
  bearing: 0,
};

const ICON__MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: false },
};

function GoogleMaps() {
  
  return (
    <React.Fragment>
      <div id="googlemap" className="googlemap">
        <Map
      xs
        zoom={[12]}
        center={[ 77.594566,12.971599]}
          style="mapbox://styles/mapbox/dark-v10"
          containerStyle={{
            height: "80%",
            width: "100%",
          }}
        >
          <Layer 
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature  coordinates={[ 77.594566,12.971599]} />
          </Layer>
        </Map>
        ;
      </div>
    </React.Fragment>
  );
}

export default GoogleMaps;
