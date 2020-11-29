import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Map } from './components/Map';
import { CategoryList } from './components/CategoryList';
import { PlaygroundsDetails } from './components/PlaygroundsDetails';
import { data } from './data.js';
import './index.html';
import './styles.css';

const Playgrounds = () => {
  return (
    <div>
      <CategoryList array={data.playgrounds} />

      <Route
        path={`/hriste/:idhriste`}
        render={(routeprops) => {
          const IDhristezURL = routeprops.match.params.idhriste;
          const playground = data.playgrounds.find((place) => {
            return IDhristezURL === place.id ? true : false;
          });

          return <PlaygroundsDetails key={playground.id} {...playground} />;
          /* ale teď to vyrenderuje všechny hřiště -> propojit to se správným hřištěm (pomocí id hřiště?) */
        }}
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
