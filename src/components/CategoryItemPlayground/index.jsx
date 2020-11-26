import React from 'react';
import './styles.css';

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
        <a className="category-item__web" href={props.web}>
          Podrobnosti o hřišti
        </a>
      </div>
    </div>
  );
};
