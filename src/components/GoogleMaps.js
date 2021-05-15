import React from "react";
import "./GoogleMaps.css";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { IconLayer } from "@deck.gl/layers";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2FieXNpbmdoMjk4IiwiYSI6ImNrb2xybDk3bDAyY3Yybm80bnplaXg5dnAifQ.W1ruChOZ_LrlxvH-8J6VbA";

const INITIAL_VIEW_STATE = {
  longitude: 77.594566,
  latitude: 12.971599,
  zoom: 11,
  pitch: 0,
  bearing: 0,
};

const ICON__MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: false }
  };

function GoogleMaps() {
    const iconLayer = new IconLayer({
        id: "icon-layer",
        data: [
          {
            
            coordinates: [ 77.594566,12.971599,]
          }
        ],
        pickable: true,
        // iconAtlas and iconMapping are required
        // getIcon: return a string
        iconAtlas: "https://img.icons8.com/ultraviolet/40/000000/place-marker--v2.png",
        getIcon: (d) => "marker",
        iconMapping: ICON__MAPPING,
        sizeScale: 15,
        getPosition: (d) => d.coordinates,
        getSize: (d) => 15,
        getColor: (d) => [Math.sqrt(d.exits), 140, 0]
      });
  return (
    <React.Fragment>
      <div className="googlemap">
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          height="80%"
          width="100%"
          controller={false}
          layers={iconLayer}
        >
          <StaticMap
            mapStyle="mapbox://styles/mapbox/dark-v10"
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          />
        </DeckGL>
      </div>
    </React.Fragment>
  );
}

export default GoogleMaps;
