import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import hristeUrl from '../../assets/icons/playgrounds.svg';
import { CategoryItemGeneral } from '../CategoryItemGeneral/index.jsx';
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
          <button
            className="marker__button marker__button--playgrounds"
            onClick={() => setPopupOpen(!popupOpen)}
          >
            <img
              className="marker__icon"
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
            offsetLeft={0}
            offsetTop={-40}
            onClose={() => setPopupOpen(false)}
          >
            <CategoryItemGeneral
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
