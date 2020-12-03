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
import { Form } from './components/Form';
import { Map } from './components/Map';
import { CategoryList } from './components/CategoryList';
import { PlaygroundsDetails } from './components/PlaygroundsDetails';
import { data } from './data.js';
import { playgroundsMatches } from './utilities';
import './index.html';
import './styles.css';

const Playgrounds = ({ setDataIndex, setActiveCategory }) => {
  const [playgroundsFilters, setPlaygroundsFilters] = useState({
    elements: '',
    shadow: '',
    toys: '',
    surface: '',
  });

  const filterItems = (place) => {
    if (!playgroundsMatches(playgroundsFilters.elements, place.elements)) {
      return false;
    }
    if (!playgroundsMatches(playgroundsFilters.shadow, place.shadow)) {
      return false;
    }
    if (!playgroundsMatches(playgroundsFilters.toys, place.toys)) {
      return false;
    }
    if (!playgroundsMatches(playgroundsFilters.surface, place.surface)) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="filters">
        <select
          className="filters__button"
          name="elements"
          id="elements"
          value={playgroundsFilters.elements}
          onChange={(event) =>
            setPlaygroundsFilters({
              ...playgroundsFilters,
              elements: event.target.value,
            })
          }
        >
          <option value="">Herní prvky</option>
          <option value="malá houpačka">malá houpačka</option>
          <option value="houpačka">houpačka</option>
          <option value="houpačka pro dvojice">houpačka pro dvojice</option>
          <option value="pískoviště">pískoviště</option>
          <option value="skluzavka">skluzavka</option>
          <option value="kolotoč">kolotoč</option>
        </select>
        <select
          className="filters__button"
          name="shadow"
          id="shadow"
          value={playgroundsFilters.shadow}
          onChange={(event) =>
            setPlaygroundsFilters({
              ...playgroundsFilters,
              shadow: event.target.value,
            })
          }
        >
          <option value="">Stín</option>
          <option value={true}>ano</option>
          <option value={false}>ne</option>
        </select>
        <select
          className="filters__button"
          name="toys"
          id="toys"
          value={playgroundsFilters.toys}
          onChange={(event) =>
            setPlaygroundsFilters({
              ...playgroundsFilters,
              toys: event.target.value,
            })
          }
        >
          <option value="">Erární hračky</option>
          <option value={true}>ano</option>
          <option value={false}>ne</option>
        </select>
        <select
          className="filters__button"
          name="surface"
          id="surface"
          value={playgroundsFilters.surface}
          onChange={(event) =>
            setPlaygroundsFilters({
              ...playgroundsFilters,
              surface: event.target.value,
            })
          }
        >
          <option value="">Povrch hřiště</option>
          <option value="písek">písek</option>
          <option value="kamínky">kamínky</option>
          <option value="tartan">tartan</option>
        </select>
        <button className="sub-filter__button">Zobrazit filtry</button>
      </div>

      <CategoryList
        dataArray={data.playgrounds}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="playgrounds"
        playgroundsFilters={playgroundsFilters}
        filterItems={filterItems}
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
    </>
  );
};

const OutdoorSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.outdoorSpaces}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="outdoorSpaces"
      />
    </>
  );
};

const InnerSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.innerSpaces}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="innerSpaces"
      />
    </>
  );
};

const Restaurants = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.restaurants}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="restaurants"
      />
    </>
  );
};

const Groups = ({ setDataIndex, setActiveCategory }) => {
  const [type, setType] = useState('');

  const filterItems = (place) => {
    if (type === '') {
      return true;
    }
    if (place.type.indexOf(type) !== -1) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="filters filters--groups">
        <select
          className="filters__button"
          name="groups"
          id="groups"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="">Typ kroužku</option>
          <option value="language">cizí jazyky</option>
          <option value="music">hudební</option>
          <option value="creative">kreativní</option>
          <option value="sport">sportovní</option>
        </select>
        <button className="sub-filter__button">Zobrazit filtry</button>
      </div>
      <CategoryList
        dataArray={data.groups}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="groups"
        type={type}
        filterItems={filterItems}
      />
    </>
  );
};

const Kindergartens = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.kindergartens}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="kindergartens"
      />
    </>
  );
};

const Doctors = ({ setDataIndex, setActiveCategory }) => {
  const [speciality, setSpeciality] = useState('');

  const filterItems = (place) => {
    if (speciality === '') {
      return true;
    }
    if (speciality === place.type) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="filters filters--doctors">
        <select
          className="filters__button"
          name="doctors"
          id="doctors"
          value={speciality}
          onChange={(event) => setSpeciality(event.target.value)}
        >
          <option value="">Specializace</option>
          <option value="alergologie">alergologie</option>
          <option value="dermatologie">dermatologie</option>
          <option value="fyzioterapie">fyzioterapie</option>
          <option value="logopedie">logopedie</option>
          <option value="oftalmologie">oční</option>
          <option value="orl">orl</option>
          <option value="ortodoncie">ortodoncie</option>
          <option value="ortopedie">ortopedie</option>
          <option value="pediatrie">pediatrie</option>
          <option value="stomatologie">stomatologie</option>
        </select>
        <button className="sub-filter__button">Zobrazit filtry</button>
      </div>
      <CategoryList
        dataArray={data.doctors}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="doctors"
        speciality={speciality}
        filterItems={filterItems}
      />
    </>
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
        <Header
          setDataIndex={setDataIndex}
          setViewport={setViewport}
          latitudeStart={latitudeStart}
          longitudeStart={longitudeStart}
        />
        <Navigation
          setDataIndex={setDataIndex}
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
          <Route path={'/form'} render={() => <Form />} />
          {/* když budeme přidávat další routy, tak to přidáme sem před redirect */}
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
        />
      </main>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
