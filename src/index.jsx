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
import {
  filterItemsPlaygrounds,
  filterItemsGroups,
  filterItemsDoctors,
} from './utilities';
import './index.html';
import './styles.css';

const Playgrounds = (props) => {
  const [filterHidden, setFilterHidden] = useState(true);

  return (
    <>
      <div
        className={
          filterHidden
            ? 'filters filters--playgrounds-hidden filters--playgrounds'
            : 'filters filters--playgrounds'
        }
      >
        <select
          className="filters__button"
          name="elements"
          id="elements"
          value={props.playgroundsFilters.elements}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
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
          value={props.playgroundsFilters.shadow}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
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
          value={props.playgroundsFilters.toys}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
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
          value={props.playgroundsFilters.surface}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
              surface: event.target.value,
            })
          }
        >
          <option value="">Povrch hřiště</option>
          <option value="písek">písek</option>
          <option value="kamínky">kamínky</option>
          <option value="tartan">tartan</option>
        </select>
        <button
          className="sub-filter__button sub-filter__button--playgrounds"
          onClick={() => setFilterHidden(!filterHidden)}
        >
          {filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
        </button>
      </div>

      <CategoryList
        dataArray={data.playgrounds}
        setDataIndex={props.setDataIndex}
        setActiveCategory={props.setActiveCategory}
        category="playgrounds"
        playgroundsFilters={props.playgroundsFilters}
        filterItems={(place) =>
          props.filterItemsPlaygrounds(place, props.playgroundsFilters)
        }
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
              setDataIndex={props.setDataIndex}
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

const Groups = (props) => {
  const [filterHidden, setFilterHidden] = useState(true);

  return (
    <>
      <div
        className={
          filterHidden
            ? 'filters filters-hidden filters--groups'
            : 'filters filters--groups'
        }
      >
        <select
          className="filters__button"
          name="groups"
          id="groups"
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <option value="">Typ kroužku</option>
          <option value="language">cizí jazyky</option>
          <option value="music">hudební</option>
          <option value="creative">kreativní</option>
          <option value="sport">sportovní</option>
        </select>
        <button
          className="sub-filter__button sub-filter__button--groups"
          onClick={() => setFilterHidden(!filterHidden)}
        >
          {filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
        </button>
      </div>
      <CategoryList
        dataArray={data.groups}
        setDataIndex={props.setDataIndex}
        setActiveCategory={props.setActiveCategory}
        category="groups"
        type={props.type}
        filterItems={(place) => props.filterItemsGroups(place, props.type)}
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

const Doctors = (props) => {
  const [filterHidden, setFilterHidden] = useState(true);

  return (
    <>
      <div
        className={
          filterHidden
            ? 'filters filters-hidden filters--doctors'
            : 'filters filters--doctors'
        }
      >
        <select
          className="filters__button"
          name="doctors"
          id="doctors"
          value={props.speciality}
          onChange={(event) => props.setSpeciality(event.target.value)}
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
        <button
          className="sub-filter__button sub-filter__button--doctors "
          onClick={() => setFilterHidden(!filterHidden)}
        >
          {filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
        </button>
      </div>
      <CategoryList
        dataArray={data.doctors}
        setDataIndex={props.setDataIndex}
        setActiveCategory={props.setActiveCategory}
        category="doctors"
        speciality={props.speciality}
        filterItems={(place) =>
          props.filterItemsDoctors(place, props.speciality)
        }
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

  /* states for playgrounds filters */
  const [playgroundsFilters, setPlaygroundsFilters] = useState({
    elements: '',
    shadow: '',
    toys: '',
    surface: '',
  });

  /* states for groups filters */
  const [type, setType] = useState('');

  /* states for doctors filters */
  const [speciality, setSpeciality] = useState('');

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
          <Route
            path={'/form'}
            render={() => <Form setDataIndex={setDataIndex} />}
          />
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
          playgroundsFilters={playgroundsFilters}
          type={type}
          speciality={speciality}
        />
      </main>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
