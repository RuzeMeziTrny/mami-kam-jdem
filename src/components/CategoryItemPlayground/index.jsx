import React from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
/*import { PlaygroundsPage } from './components/PlaygroundsPage/index.jsx';*/

const PlaygroundsField = [
  {
    name: 'Veronské náměstí (u Alberta)',
    photo: 'DOPLNIT',
    id: 'veronske-albert',
    babySwing: true,
    swing: true,
    seeSaw: false,
    sandBox: true,
    slide: true,
    carousel: true,
    others: ['houpací želva', 'domeček'],
    shadow: true,
    shadowDetails: 'stín jen nad pískovištěm a v domečku a v podvečer',
    toys: true,
    sand: true,
    grain: false,
    tartan: false,
  },
  {
    name: 'Veronské náměstí (u Alberta)',
    photo: 'DOPLNIT',
    id: 'veronske-albert',
    babySwing: true,
    swing: true,
    seeSaw: false,
    sandBox: true,
    slide: true,
    carousel: true,
    others: ['houpací želva', 'domeček'],
    shadow: true,
    shadowDetails: 'stín jen nad pískovištěm a v domečku a v podvečer',
    toys: true,
    sand: true,
    grain: false,
    tartan: false,
  },
];

export const CategoryItemPlayground = (props) => {
  return (
    <div className="category-item">
      <img
        className="category-item__image"
        src={props.image}
        alt="obrázek místa"
      />
      <div className="category-item__details">
        <p className="category-item__name">{props.name}</p>
        <p className="category-item__address">{props.address}</p>

        {/*nejpíše místo id props*/}
        <Link to={`/hriste/:${props.id}?`} className="category-item__web">
          Podrobnosti o hřišti
        </Link>
        <PlaygroundsPage />
        <Route path={`/hriste/:${props.id}?`}></Route>

        <a className="category-item__web" href={props.web}>
          Podrobnosti o hřišti
        </a>
      </div>
    </div>
  );
};

/*img={data.hriste[0].foto}
name={data.hriste[0].nazev}
web={data.hriste[0].web}
/>*/
