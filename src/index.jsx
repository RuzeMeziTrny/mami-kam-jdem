import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { matchPath } from 'react-router';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';
import { Navigation } from './components/Navigation';
import { Map } from './components/Map';
import { CategoryList } from './components/CategoryList';
import { Form } from './components/Form';
import { PlaygroundsDetails } from './components/PlaygroundsDetails';
import { data } from './data.js';
import './index.html';
import './styles.css';

const Playgrounds = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div className="category-list__container">
      <div className="filters">
        <select
          className="filters__button"
          name="playgroundElements"
          id="playgroundElements"
        >
          <option value="allElements" selected>
            Herní prvky
          </option>
          <option value="babySwing">malá houpačka</option>
          <option value="swing">houpačka</option>
          <option value="seeSaw">houpačka pro dvojice</option>
          <option value="sandbox">pískoviště</option>
          <option value="slide">skluzavka</option>
          <option value="carousel">kolotoč</option>
        </select>
        <select className="filters__button" name="shadow" id="shadow">
          <option value="allShadow" selected>
            Stín
          </option>
          <option value="true">ano</option>
          <option value="false">ne</option>
        </select>
        <select className="filters__button" name="toys" id="toys">
          <option value="allToys" selected>
            Erární hračky
          </option>
          <option value="true">ano</option>
          <option value="false">ne</option>
        </select>
        <select className="filters__button" name="surface" id="surface">
          <option value="allSurface" selected>
            Povrch hřiště
          </option>
          <option value="sand">písek</option>
          <option value="grain">kamínky</option>
          <option value="tartan">tartan</option>
        </select>
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
    </div>
  );
};

const OutdoorSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <div className="category-list__container">
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
    <div className="category-list__container">
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
    <div className="category-list__container">
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
    <div className="category-list__container">
      <div className="filters">
        <select className="filters__button" name="groups" id="groups">
          <option value="allGroups" selected>
            Typ kroužku
          </option>
          <option value="language">cizí jazyky</option>
          <option value="music">hudební</option>
          <option value="creative">kreativní</option>
          <option value="sport">sportovní</option>
        </select>
      </div>
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
    <div className="category-list__container">
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
    <div className="category-list__container">
      <div className="filters">
        <select className="filters__button" name="doctors" id="doctors">
          <option value="allDoctors" selected>
            Specializace
          </option>
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
      </div>
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

  /* const location = useLocation(); */
  /* Cannot read property 'location' of undefined at useLocation */

  /* const otherURL = routes.find((route) => {
    const match = matchPath(location.pathname, { path: route.path });
    (vrací vždy null, protože location.pathname je jen "/")
    return match === null ? true : false;
  }); */
  /* ale tímhle neošetřím, pokud někdo napíše /hriste/neexistujici-adresa */

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

            {/*  <Link to="/form" className="form__link">
              Napište nám
            </Link>     
  <Route path={'/form'} render={() => <Form />} /> */}
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

        {/* <Route exact path="/home"> (nefunguje mi to ani s konkrétní variantou)
          <Redirect to="/" />
        </Route> */}
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
