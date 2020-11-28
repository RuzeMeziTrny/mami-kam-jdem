import React from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';

export const PlaygroundsPage = (props) => {
  const params = useParams();
  console.log(params);

  const surface = () => {
    const surfaceElm = null;
    if (props.sand) {
      surfaceElm = 'písek';
    } else if (props.grain) {
      surfaceElm = 'kamínky';
    } else if (props.tartan) {
      surfaceElm = 'tartan';
    }
  };

  return <div className="fake-pop-up"></div>;

  return (
    <div>
      <p>{props.id}</p>
      <h3 className="playgrounds-name">{props.name}</h3>
      <img
        className="playgrounds-photo"
        src="hriste-veronske-namesti-albert-1.jpg"
        alt="obrázek hřiště"
      />
      <ul className="playgrounds-list">
        <li>
          <h3 className="playgrounds-items--heading">Herní prvky</h3>
          <ul className="playgrounds-others">
            <li>{props.babySwing}</li>
            <li>{props.seeSaw}</li>
            <li>{props.sandBox}</li>
            <li>{props.carousel}</li>
            <li>{props.others}</li>
          </ul>
        </li>
        <li>
          <h3 className="playgrounds-items--heading">Stín</h3>
          <p>
            {props.shadow}, {props.shadowDetails}
          </p>

          {/* tady podmínka pro zobrazí ano/ne a ne true/false */}
        </li>
        <li>
          <h3 className="playgrounds-items--heading">Povrch hřiště</h3>
          <ul>
            <p>{surface}</p>
          </ul>
          {/* tady podmínka, aby se zobrazil jen klíč, u kterého je true a ne všechny */}
        </li>
        <li>
          <h3 className="playgrounds-items--heading">Erární hračky</h3>
          <p>{props.toys === true ? 'ano' : 'ne'}</p>
          {/* zobrazit ano/ne podle true/false */}
        </li>
      </ul>
    </div>
  );
};
