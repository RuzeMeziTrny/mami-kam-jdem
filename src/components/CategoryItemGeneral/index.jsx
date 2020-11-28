import React from 'react';
import './styles.css';

export const CategoryItemGeneral = (props) => {
  const colonIndex = props.web.indexOf(':');

  return (
    <div className="category-item">
      <div className="category-item__image">
        <img src={`/assets/images/${props.image}`} alt="obrázek místa" />
      </div>
      <div className="category-item__details">
        <p className="category-item__name">{props.name}</p>
        <p className="category-item__address">{props.address}</p>
        <a className="category-item__web" href={props.web} target="_blank">
          {props.web !== '' &&
            props.web.slice(colonIndex + 3, props.web.length).slice(0, 20) +
              '...'}
        </a>
      </div>
    </div>
  );
};
