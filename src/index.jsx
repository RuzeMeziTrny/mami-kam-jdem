import React, { useState } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
        path={`/hriste/:id`}
        render={() =>
          data.playgrounds.map((place) => (
            <PlaygroundsDetails
              key={place.id}
              name={place.name}
              image={place.image}
              address={place.address}
              babySwing={place.babySwing}
              swing={place.swing}
              seeSaw={place.seeSaw}
              sandbox={place.sandbox}
              slide={place.slide}
              carousel={place.carousel}
              others={place.others}
              shadow={place.shadow}
              shadowDetails={place.shadowDetails}
              toys={place.toys}
              sand={place.sand}
              grain={place.grain}
              tartan={place.tartan}
            />
            /* ale teď to vyrenderuje všechny hřiště -> propojit to se správným hřištěm (pomocí id hřiště?) */
          ))
        }
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

  return (
    <Router>
      <section>
        <header>
          <h1>
            <Link to="/" className="main-heading">
              Mami, kam jdem?
            </Link>
          </h1>
        </header>
        <Navigation setDataIndex={setDataIndex} />
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
        />
      </main>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
