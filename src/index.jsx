import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Playgrounds } from './components/Playgrounds';
import { OutdoorSpaces } from './components/OutdoorSpaces';
import { InnerSpaces } from './components/InnerSpaces';
import { Restaurants } from './components/Restaurants';
import { Groups } from './components/Groups';
import { Kindergartens } from './components/Kindergartens';
import { Doctors } from './components/Doctors';
import { Map } from './components/Map';
import {
  filterItemsPlaygrounds,
  filterItemsGroups,
  filterItemsDoctors,
} from './utilities';
import './index.html';
import './styles.css';

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

  /* state for show/hide filters */
  const [filterHidden, setFilterHidden] = useState(true);

  /* state for playgrounds filters */
  const [playgroundsFilters, setPlaygroundsFilters] = useState({
    elements: '',
    shadow: '',
    toys: '',
    surface: '',
  });

  /* state for groups filters */
  const [type, setType] = useState('');

  /* state for doctors filters */
  const [speciality, setSpeciality] = useState('');

  return (
    <Router>
      <section className="panel">
        <Header
          setDataIndex={setDataIndex}
          setViewport={setViewport}
          latitudeStart={latitudeStart}
          longitudeStart={longitudeStart}
          setFilterHidden={setFilterHidden}
        />
        <Navigation
          setDataIndex={setDataIndex}
          setViewport={setViewport}
          latitudeStart={latitudeStart}
          longitudeStart={longitudeStart}
          setFilterHidden={setFilterHidden}
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
                    filterHidden={filterHidden}
                    setFilterHidden={setFilterHidden}
                    playgroundsFilters={playgroundsFilters}
                    setPlaygroundsFilters={setPlaygroundsFilters}
                    filterItemsPlaygrounds={filterItemsPlaygrounds}
                    type={type}
                    setType={setType}
                    filterItemsGroups={filterItemsGroups}
                    speciality={speciality}
                    setSpeciality={setSpeciality}
                    filterItemsDoctors={filterItemsDoctors}
                  />
                )}
              />
            );
          })}
          <Route render={() => <Redirect to="/" />} />
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
          playgroundsFilters={playgroundsFilters}
          type={type}
          speciality={speciality}
        />
      </main>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));

/* TODO: názvy kategorií dát do proměnných a pak doplňovat jen proměnné */
