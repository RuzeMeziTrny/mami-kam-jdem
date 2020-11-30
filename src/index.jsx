import React, { useState } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';
import { Navigation } from './components/Navigation';
import { Map } from './components/Map';
import { CategoryList } from './components/CategoryList';
import { PlaygroundsDetails } from './components/PlaygroundsDetails';
import { data } from './data.js';
import './index.html';
import './styles.css';

const Playgrounds = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.playgrounds}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="playgrounds"
      />

      <Route
        path={`/hriste/:idhriste`}
        render={(routeprops) => {
          const IDhristezURL = routeprops.match.params.idhriste;
          const playground = data.playgrounds.find((place) => {
            return IDhristezURL === place.id ? true : false;
          });

          return (
            <PlaygroundsDetails
              key={playground.id}
              setDataIndex={setDataIndex}
              {...playground}
            />
          );
        }}
      />
    </div>
  );
};

const OutdoorSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.outdoorSpaces}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="outdoorSpaces"
      />
    </div>
  );
};

const InnerSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.innerSpaces}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="innerSpaces"
      />
    </div>
  );
};

const Restaurants = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.restaurants}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="restaurants"
      />
    </div>
  );
};

const Groups = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.groups}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="groups"
      />
    </div>
  );
};

const Kindergartens = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.kindergartens}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="kindergartens"
      />
    </div>
  );
};

const Doctors = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div>
      <CategoryList
        array={data.doctors}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="doctors"
      />
    </div>
  );
};

const routes = [
  { path: '/hriste', Component: Playgrounds },
  { path: '/venkovni-arealy', Component: OutdoorSpaces },
  { path: '/vnitrni-arealy', Component: InnerSpaces },
  { path: '/restaurace', Component: Restaurants },
  { path: '/krouzky', Component: Groups },
  { path: '/skolky', Component: Kindergartens },
  { path: '/lekari', Component: Doctors },
];

const App = () => {
  const [dataIndex, setDataIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');

  const latitudeStart = 50.0416419;
  const longitudeStart = 14.5408781;

  const [viewport, setViewport] = useState({
    latitude: latitudeStart,
    longitude: longitudeStart,
    zoom: 13,
  });

  return (
    <Router>
      <section>
        <header>
          <h1>
            <Link
              to="/"
              className="main-heading"
              onClick={() => {
                setDataIndex(null);
                setViewport({
                  latitude: latitudeStart,
                  longitude: longitudeStart,
                  zoom: viewport.zoom,
                  transitionDuration: 2000,
                  transitionInterpolator: new FlyToInterpolator(),
                  transitionEasing: d3.easeCubic,
                });
              }}
            >
              Mami, kam jdem?
            </Link>
          </h1>
          <button className="header__btn">
            <img
              className="header__btn--image"
              src="/assets/icons/envelope_white.svg"
              alt="obálka"
            />
            <a href="mailto:someone@example.com">Napište nám</a>
          </button>
        </header>
        <Navigation
          setDataIndex={setDataIndex}
          viewport={viewport}
          setViewport={setViewport}
          latitudeStart={latitudeStart}
          longitudeStart={longitudeStart}
        />
        <Switch>
          {routes.map((route, index) => {
            const { Component, path } = route;
            return (
              <Route
                key={index}
                path={path}
                render={() => (
                  <Component
                    setDataIndex={setDataIndex}
                    setActiveCategory={setActiveCategory}
                  />
                )}
              />
            );
          })}
        </Switch>
      </section>
      <main>
        <Map
          dataIndex={dataIndex}
          setDataIndex={setDataIndex}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          viewport={viewport}
          setViewport={setViewport}
        />
      </main>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
