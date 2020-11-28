import React from 'react';
import { Link } from 'react-router-dom';
import { PlaygroundsPage } from '../PlaygroundsPage';
import './styles.css';

export const CategoryItemPlayground = (props) => {
  return (
    <div className="category-item">
      <div className="category-item__image">
        <img src={`/assets/images/${props.image}`} alt="obrázek místa" />
      </div>
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
