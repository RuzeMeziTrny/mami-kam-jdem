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
import './index.html';
import './styles.css';

const Playgrounds = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <div className="filters">
        <select
          className="filters__button"
          name="playgroundElements"
          id="playgroundElements"
        >
          <option value="allElements">Herní prvky</option>
          <option value="babySwing">malá houpačka</option>
          <option value="swing">houpačka</option>
          <option value="seeSaw">houpačka pro dvojice</option>
          <option value="sandbox">pískoviště</option>
          <option value="slide">skluzavka</option>
          <option value="carousel">kolotoč</option>
        </select>
        <select className="filters__button" name="shadow" id="shadow">
          <option value="allShadow">Stín</option>
          <option value="true">ano</option>
          <option value="false">ne</option>
        </select>
        <select className="filters__button" name="toys" id="toys">
          <option value="allToys">Erární hračky</option>
          <option value="true">ano</option>
          <option value="false">ne</option>
        </select>
        <select className="filters__button" name="surface" id="surface">
          <option value="allSurface">Povrch hřiště</option>
          <option value="sand">písek</option>
          <option value="grain">kamínky</option>
          <option value="tartan">tartan</option>
        </select>
        <button className="sub-filter__button">Zobrazit filtry</button>
      </div>

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
    </>
  );
};

const OutdoorSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        array={data.outdoorSpaces}
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
        array={data.innerSpaces}
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
        array={data.restaurants}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="restaurants"
      />
    </>
  );
};

const Groups = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <div className="filters filters--groups">
        <select className="filters__button" name="groups" id="groups">
          <option value="allGroups">Typ kroužku</option>
          <option value="language">cizí jazyky</option>
          <option value="music">hudební</option>
          <option value="creative">kreativní</option>
          <option value="sport">sportovní</option>
        </select>
        <button className="sub-filter__button">Zobrazit filtry</button>
      </div>
      <CategoryList
        array={data.groups}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="groups"
      />
    </>
  );
};

const Kindergartens = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        array={data.kindergartens}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="kindergartens"
      />
    </>
  );
};

const Doctors = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <div className="filters filters--doctors">
        <select className="filters__button" name="doctors" id="doctors">
          <option value="allDoctors">Specializace</option>
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
        array={data.doctors}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="doctors"
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
          viewport={viewport}
          setViewport={setViewport}
          latitudeStart={latitudeStart}
          longitudeStart={longitudeStart}
        />
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
