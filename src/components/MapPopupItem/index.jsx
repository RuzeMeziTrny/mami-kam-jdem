import React from 'react';
import { Link } from 'react-router-dom';
import { cutOffUrlProtocole } from '../../utilities';
import './styles.css';

export const MapPopupItem = (props) => (
  <figure className="map-popup-item">
    <div className="map-popup-item__image">
      <img src={`/assets/images/${props.image}`} alt="obrázek místa" />
    </div>
    <figcaption className="map-popup-item__details">
      <p className="map-popup-item__name">{props.name}</p>
      <p className="map-popup-item__address">{props.address}</p>
      {props.category === 'playgrounds' ? (
        <Link to={`/hriste/${props.id}`} className="map-popup-item__web">
          Podrobnosti o hřišti
        </Link>
      ) : (
        <a className="map-popup-item__web" href={props.web} target="_blank">
          {cutOffUrlProtocole(props.web)}
        </a>
      )}
    </figcaption>
  </figure>
);
