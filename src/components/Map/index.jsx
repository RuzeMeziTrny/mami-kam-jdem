import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import hristeUrl from '../../assets/icons/hriste.png';
import { CategoryItem } from '../CategoryItem/index.jsx';
import { data } from '../../data.js';
import './styles.css';

const seznamMapy = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
      minzoom: 0,
      maxzoom: 19,
      tileSize: 256,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
    },
  ],
};

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.0409669,
    longitude: 14.5574619,
    zoom: 15,
  });

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100vh"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken="pk.eyJ1IjoicnV6ZW1leml0cm55IiwiYSI6ImNraHVubmo4MjFlZDAyeGt6bGNyamV1bWEifQ.OZe_RJx_MXkd6mRh9K8-uw"
        mapStyle={seznamMapy}
        scrollZoom={false} /* když chceme zabránit zoomu kolečkem myši */
      >
        <div className="map__control-panel">
          <NavigationControl />
          <GeolocateControl />
        </div>

        <Marker
          latitude={50.0409669}
          longitude={14.5574619}
          offsetLeft={-25}
          offsetTop={-25}
        >
          <button onClick={() => setPopupOpen(true)}>
            <img
              className="marker--playgrounds"
              src={hristeUrl}
              width={50}
              height={50}
              alt="špendlík hřiště"
            />
          </button>
        </Marker>

        {popupOpen && (
          <Popup
            latitude={50.0409669}
            longitude={14.5574619}
            offsetLeft={100}
            offsetTop={-40}
          >
            <CategoryItem
              img={data.skolky[0].foto}
              name={data.skolky[0].nazev}
              web={data.skolky[0].web}
            />
            {/* udělat pomocí map */}
          </Popup>
        )}
      </ReactMapGL>
    </>
  );
};
