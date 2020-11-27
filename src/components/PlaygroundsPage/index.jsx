import React from 'react';
import './styles.css';

export const PlaygroundsPage = () => {
  return (
    <>
      <p>{id}</p>
      <h3 class="playgrounds-name">{props.name}</h3>
      <img
        class="playgrounds-photo"
        src="hriste-veronske-namesti-albert-1.jpg"
        alt="obrázek hřiště"
      />
      <ul class="playgrounds-list">
        <li>
          <h3 class="playgrounds-items--heading">Herní prvky</h3>
          <li class="playgrounds-item">{props.babySwing}</li>
          <li>{props.seeSaw}</li>
          <li>{props.sandBox}</li>
          <li>{props.carousel}</li>
          <li>{props.others}</li>
        </li>
        <li>
          <h3 class="playgrounds-items--heading">Stín</h3>
          <li>{props.shadow}</li>
          <li>{props.shadowDetails}</li>
        </li>
        <li>
          <h3 class="playgrounds-items--heading">Povrch hřiště</h3>
          <li>{props.sand}</li>
          <li>{props.grain}</li>
          <li>{props.tartan}</li>
        </li>
        <li>
          <h3 class="playgrounds-items--heading">Erární hračky</h3>
          <li>{props.toys}</li>
        </li>
      </ul>
    </>
  );
};
