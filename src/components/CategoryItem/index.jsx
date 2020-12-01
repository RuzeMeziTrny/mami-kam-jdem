import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const CategoryItem = (props) => {
  const cutOffUrlProtocole = (web) => {
    const colonIndex = web.indexOf(':');
    if (web === '') {
      return null;
    } else if (web.length <= 30) {
      return web.slice(colonIndex + 3, web.length);
    } else {
      return `${web.slice(colonIndex + 3, 30)}...`;
    }
  };

  return (
    <div className="category-item" onClick={props.handleClick}>
      <div className="category-item__image">
        <img src={`/assets/images/${props.image}`} alt="obrázek místa" />
      </div>
      <div className="category-item__details">
        <p className="category-item__name">{props.name}</p>
        <p className="category-item__address">{props.address}</p>
        {props.category === 'playgrounds' ? (
          <Link to={`/hriste/${props.id}`} className="category-item__web">
            Podrobnosti o hřišti
          </Link>
        ) : (
          <a className="category-item__web" href={props.web} target="_blank">
            {cutOffUrlProtocole(props.web)}
          </a>
        )}
      </div>
    </div>
  );
};
