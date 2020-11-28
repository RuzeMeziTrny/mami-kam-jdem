import React from 'react';
import './styles.css';
import { Route, Link, Router } from 'react-router-dom';
import { PlaygroundsPage } from '../PlaygroundsPage';

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

        <Link to={`/hriste/${props.id}`} className="category-item__web">
          Podrobnosti o hřišti
        </Link>
      </div>
    </div>
  );
};
