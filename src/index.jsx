import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation/index.jsx';
import { Map } from './components/Map/index.jsx';
import './index.html';
import './styles.css';
import { CategoryList } from './components/CategoryList/index.jsx';
import { PlaygroundsDetails } from './components/PlaygroundsDetails/index.jsx';
import { data } from './data.js';

const Playgrounds = () => {
  return (
    <div>
      <p>filtry pro hřiště</p>
      <CategoryList array={data.playgrounds} />

      <Route
        path={`/hriste/:id`}
        render={() => (
          <PlaygroundsDetails
            key={data.playgrounds.id}
            image={data.playgrounds.image}
            name={data.playgrounds.name}
            address={data.playgrounds.address}
            id={data.playgrounds.id}
            babySwing={data.playgrounds.babySwing}
            seeSaw={data.playgrounds.seeSaw}
            sandBox={data.playgrounds.sandBox}
            carousel={data.playgrounds.carousel}
            others={data.playgrounds.others}
            shadow={data.playgrounds.shadow}
            shadowDetails={data.playgrounds.shadowDetails}
            tartan={data.playgrounds.tartan}
            grain={data.playgrounds.grain}
            sand={data.playgrounds.sand}
            slide={data.playgrounds.slide}
            /*nefunguje, data nejdou*/
          />
        )}
      />
    </div>
  );
};

const OutdoorSpaces = () => {
  return (
    <div>
      <CategoryList array={data.outdoorSpaces} />
    </div>
  );
};

const InnerSpaces = () => {
  return (
    <div>
      <CategoryList array={data.innerSpaces} />
    </div>
  );
};

const Restaurants = () => {
  return (
    <div>
      <CategoryList array={data.restaurants} />
    </div>
  );
};

const Groups = () => {
  return (
    <div>
      <CategoryList array={data.groups} />
    </div>
  );
};

const Kindergartens = () => {
  return (
    <div>
      <CategoryList array={data.kindergartens} />
    </div>
  );
};

const Doctors = () => {
  return (
    <div>
      <CategoryList array={data.doctors} />
    </div>
  );
};

const routes = [
  { path: '/hriste', component: Playgrounds },
  { path: '/venkovni-arealy', component: OutdoorSpaces },
  { path: '/vnitrni-arealy', component: InnerSpaces },
  { path: '/restaurace', component: Restaurants },
  { path: '/krouzky', component: Groups },
  { path: '/skolky', component: Kindergartens },
  { path: '/lekari', component: Doctors },
];

const App = () => (
  <Router>
    <section>
      <header>
        <h1>
          <Link to="/" className="main-heading">
            Mami, kam jdem?
          </Link>
        </h1>
      </header>
      <Navigation />
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </section>
    <main>
      <Map />
    </main>
  </Router>
);

render(<App />, document.querySelector('#app'));
