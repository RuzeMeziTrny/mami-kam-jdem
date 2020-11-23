import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation/index.jsx';
import { Map } from './components/Map/index.jsx';
import './index.html';
import './styles.css';

const routes = [
  { path: '/hriste', component: Playgrounds },
  { path: '/venkovni-arealy', component: OutdoorSpaces },
  { path: '/vnitrni-arealy', component: InnerSpaces },
  { path: '/restaurace', component: Restaurants },
  { path: '/krouzky', component: Groups },
  { path: '/skolky', component: Kindergartens },
  { path: '/lekari', component: Doctors },
];

const Playgrounds = () => {
  return (
    <div>
      <p>filtry pro hřiště</p>
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

const App = () => (
  <Router>
    <header>
      <h1>
        <Link to="/" className="main-heading">
          Mami, kam jdem?
        </Link>
      </h1>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Route path="/hriste">
          <Playgrounds />
        </Route>
        <Route path="/venkovni-arealy">
          <OutdoorSpaces />
        </Route>
        <Route path="/vnitrni-arealy">
          <InnerSpaces />
        </Route>
        <Route path="/restaurace">
          <Restaurants />
        </Route>
        <Route path="/krouzky">
          <Groups />
        </Route>
        <Route path="/skolky">
          <Kindergartens />
        </Route>
        <Route path="/lekari">
          <Doctors />
        </Route>
        {/* z nějakého důvodu nefunguje - opravit:
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
        */}
      </Switch>
      <Map />
    </main>
  </Router>
);

render(<App />, document.querySelector('#app'));
