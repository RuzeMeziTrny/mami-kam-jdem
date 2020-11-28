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
import { CategoryItemGeneral } from '../CategoryItemGeneral';
import { CategoryItemPlayground } from '../CategoryItemPlayground';
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

  const [dataIndex, setDataIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');

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

        {/* markery pro hřiště */}
        {data.playgrounds.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--playgrounds"
              onClick={() => {
                setActiveCategory('playgrounds');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
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

        {/* markery pro venkovní areály */}
        {data.outdoorSpaces.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--outdoor-spaces"
              onClick={() => {
                setActiveCategory('outdoorSpaces');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
            >
              <img
                className="marker__icon"
                src={iconOutdoorSpaces}
                width={40}
                height={40}
                alt="špendlík venkovní areál"
              />
            </button>
          </Marker>
        ))}

        {/* markery pro vnitřní areály */}
        {data.innerSpaces.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--inner-spaces"
              onClick={() => {
                setActiveCategory('innerSpaces');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
            >
              <img
                className="marker__icon"
                src={iconInnerSpaces}
                width={40}
                height={40}
                alt="špendlík vnitřní areál"
              />
            </button>
          </Marker>
        ))}

        {/* markery pro restaurace */}
        {data.restaurants.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--restaurants"
              onClick={() => {
                setActiveCategory('restaurants');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
            >
              <img
                className="marker__icon"
                src={iconRestaurants}
                width={40}
                height={40}
                alt="špendlík restaurace"
              />
            </button>
          </Marker>
        ))}

        {/* markery pro kroužky */}
        {data.groups.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--groups"
              onClick={() => {
                setActiveCategory('groups');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
            >
              <img
                className="marker__icon"
                src={iconGroups}
                width={40}
                height={40}
                alt="špendlík kroužek"
              />
            </button>
          </Marker>
        ))}

        {/* markery pro školky */}
        {data.kindergartens.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--kindergartens"
              onClick={() => {
                setActiveCategory('kindergartens');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
            >
              <img
                className="marker__icon"
                src={iconKindergartens}
                width={40}
                height={40}
                alt="špendlík školka"
              />
            </button>
          </Marker>
        ))}

        {/* markery pro lékaře */}
        {data.doctors.map((place, index) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <button
              className="marker__button marker__button--doctors"
              onClick={() => {
                setActiveCategory('doctors');
                dataIndex === index ? setDataIndex(null) : setDataIndex(index);
              }}
            >
              <img
                className="marker__icon"
                src={iconDoctors}
                width={40}
                height={40}
                alt="špendlík lékař"
              />
            </button>
          </Marker>
        ))}

        {dataIndex !== null && (
          <Popup
            key={data[activeCategory][dataIndex].id}
            latitude={data[activeCategory][dataIndex].latitude}
            longitude={data[activeCategory][dataIndex].longitude}
            offsetTop={-30}
            closeOnClick={false}
            onClose={() => setDataIndex(null)}
          >
            {activeCategory === 'playgrounds' ? (
              <CategoryItemPlayground
                img={place.image}
                name={place.name}
                id={place.id}
              />
            )}
          </Popup>
        )}
      </ReactMapGL>
    </>
  );
};
