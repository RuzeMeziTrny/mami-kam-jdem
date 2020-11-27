import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation/index.jsx';
import { Map } from './components/Map/index.jsx';
import './index.html';
import './styles.css';
import { CategoryList } from './components/CategoryList/index.jsx';
/*import { CategoryItemPlayground } from './components/CategoryItemPlayground/index.jsx';*/

const Playgrounds = () => {
  return (
    <div>
      <p>filtry pro hřiště</p>
      {/*  <CategoryItemPlayground />*/}
      <p>seznam hřišť</p>
    </div>
  );
};

const OutdoorSpaces = () => {
  return (
    <div>
      <p>seznam venkovních areálů</p>
    </div>
  );
};

const InnerSpaces = () => {
  return (
    <div>
      <p>seznam vnitřních areálů</p>
    </div>
  );
};

const Restaurants = () => {
  return (
    <div>
      <p>seznam restaurací a kaváren</p>
      <CategoryList />
    </div>
  );
};

const Groups = () => {
  return (
    <div>
      <p>filtry pro kroužky</p>
      <p>seznam kroužků</p>
    </div>
  );
};

const Kindergartens = () => {
  return (
    <div>
      <p>seznam školek</p>
    </div>
  );
};

const Doctors = () => {
  return (
    <div>
      <p>filtry pro lékaře</p>
      <p>seznam lékařů</p>
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
