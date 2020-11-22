import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.html';
import './styles.css';

const routes = [
  { path: '/hriste', component: Hriste },
  { path: '/venkovni-arealy', component: VenkovniArealy },
  { path: '/vnitrni-arealy', component: VnitrniArealy },
  { path: '/restaurace', component: Restaurace },
  { path: '/krouzky', component: Krouzky },
  { path: '/skolky', component: Skolky },
  { path: '/lekari', component: Lekari },
];

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <img src="../assets/icons/vse.png" alt="ikona mimino" />
        Vše
      </li>
      <li>
        <img src="../assets/icons/hriste.png" alt="ikona kyblík a lopatka" />
        <Link to="/hriste">Dětská hřiště</Link>
      </li>
      <li>
        <img src="../assets/icons/venkovni-arealy.png" alt="ikona větrník" />
        <Link to="/venkovni-arealy">Venkovní areály</Link>
      </li>
      <li>
        <img
          src="../assets/icons/vnitrni-arealy.png"
          alt="ikona stavba z kostek"
        />
        <Link to="/vnitrni-arealy">Vnitřní areály</Link>
      </li>
      <li>
        <img
          src="../assets/icons/restaurace.png"
          alt="ikona lžíce a vidlička"
        />
        <Link to="/restaurace">Restaurace, kavárny</Link>
      </li>
      <li>
        <img src="../assets/icons/krouzky.png" alt="ikona puzzle" />
        <Link to="/krouzky">Kroužky</Link>
      </li>
      <li>
        <img src="../assets/icons/skolky.png" alt="ikona kostky" />
        <Link to="/skolky">Soukromé školky</Link>
      </li>
      <li>
        <img src="../assets/icons/lekari.png" alt="ikona kříž" />
        <Link to="/lekari">Dětští lékaři</Link>
      </li>
    </ul>
  </nav>
);

const Hriste = () => {
  return (
    <div>
      <p>filtry pro hřiště</p>
      <p>seznam hřišť</p>
    </div>
  );
};

const VenkovniArealy = () => {
  return (
    <div>
      <p>seznam venkovních areálů</p>
    </div>
  );
};

const VnitrniArealy = () => {
  return (
    <div>
      <p>seznam vnitřních areálů</p>
    </div>
  );
};

const Restaurace = () => {
  return (
    <div>
      <p>seznam restaurací a kaváren</p>
    </div>
  );
};

const Krouzky = () => {
  return (
    <div>
      <p>filtry pro kroužky</p>
      <p>seznam kroužků</p>
    </div>
  );
};

const Skolky = () => {
  return (
    <div>
      <p>seznam školek</p>
    </div>
  );
};

const Lekari = () => {
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
        <Link to="/">Mami, kam jdem?</Link>
      </h1>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Route path="/hriste">
          <Hriste />
        </Route>
        <Route path="/venkovni-arealy">
          <VenkovniArealy />
        </Route>
        <Route path="/vnitrni-arealy">
          <VnitrniArealy />
        </Route>
        <Route path="/restaurace">
          <Restaurace />
        </Route>
        <Route path="/krouzky">
          <Krouzky />
        </Route>
        <Route path="/skolky">
          <Skolky />
        </Route>
        <Route path="/lekari">
          <Lekari />
        </Route>
        {/* z nějakého důvodu nefunguje - opravit:
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
        */}
      </Switch>
    </main>
  </Router>
);

render(<App />, document.querySelector('#app'));
