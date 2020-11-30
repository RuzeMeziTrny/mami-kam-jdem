import React from 'react';
import './styles.css';


const PlaygroundsPage = () => {
return (
    <div>
        <h2 class="playgrounds-name">{props.name}</h2>
        <img
        className="playgrounds__image"
        src={props.image}
        alt="obrázek hřiště"
      />
       <div className="playgrounds__details">
        <p className="category-item__address">{props.address}</p>
        <p className="category-item__address">{props.address}</p>
        <p className="category-item__address">{props.address}</p>
        <p className="category-item__address">{props.address}</p>




    </div>



)


}