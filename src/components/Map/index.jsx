import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
  Marker,
  NavigationControl,
  GeolocateControl,
  Popup,
} from 'react-map-gl';
import iconPlaygrounds from '../../assets/icons/playgrounds.svg';
import iconOutdoorSpaces from '../../assets/icons/outdoor-spaces.svg';
import iconInnerSpaces from '../../assets/icons/inner-spaces.svg';
import iconRestaurants from '../../assets/icons/restaurants.svg';
import iconGroups from '../../assets/icons/groups.svg';
import iconKindergartens from '../../assets/icons/kindergartens.svg';
import iconDoctors from '../../assets/icons/doctors.svg';
import { data } from '../../data.js';
import { CategoryItemGeneral } from '../CategoryItemGeneral/index.jsx';
import { CategoryItemPlayground } from '../CategoryItemPlayground/index.jsx';
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
    latitude: 50.0441875,
    longitude: 14.5536622,
    zoom: 15,
  });

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle={seznamMapy}
        /* scrollZoom={false} kdybychom chtěli zabránit zoomu kolečkem myši */
      >
        <div className="map__control-panel">
          <NavigationControl />
          <GeolocateControl />
        </div>

        {/* markery a popupy pro hřiště */}
        {data.playgrounds.map((place) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--playgrounds"
              onClick={() => setPopupOpen(!popupOpen)}
            >
              <img
                className="marker__icon"
                src={iconPlaygrounds}
                width={40}
                height={40}
                alt="špendlík hřiště"
              />
            </button>
          </Marker>
        ))}

        {popupOpen &&
          data.playgrounds.map((place) => (
            <Popup
              key={place.id}
              latitude={place.latitude}
              longitude={place.longitude}
              offsetTop={-30}
              onClose={() => setPopupOpen(false)}
            >
              <CategoryItemPlayground
                img={place.image}
                name={place.name}
                web={place.id}
              />
            </Popup>
          ))}
        {/* pořešit, aby se popupy neotevíraly hromadně */}
      </ReactMapGL>
    </>
  );
};
