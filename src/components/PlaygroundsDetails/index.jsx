import React from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';

export const PlaygroundsDetails = (props) => {
  const params = useParams();

  const surface = () => {
    const surfaceElm = null;
    if (props.sand) {
      surfaceElm === 'písek';
    } else if (props.grain) {
      surfaceElm === 'kamínky';
    } else if (props.tartan) {
      surfaceElm === 'tartan';
    }
    return surfaceElm;
  };

  const shadow = () => {
    const shadowElm = null;
    if (props.shadow) {
      shadowElm === `ano/ + ${props.shadowDetails}`;
    } else {
      shadowElm === 'ne';
    }
    return shadowElm;
  };

  /* return <div className="fake-pop-up">Ahoj</div>;*/

  return (
    <div className="fake-pop-up">
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
            <li>{props.babySwing === true ? 'pískoviště ' : null}</li>
            <li>{props.seeSaw === true ? 'houpačka pro dvojice' : 'ne'}</li>
            <li>{props.sandBox === true ? 'ano' : 'ne'}</li>
            <li>{props.carousel === true ? 'ano' : 'ne'}</li>
            <li>{props.slide === true ? 'ano' : 'ne'}</li>
            {/*<li>{props.others === true ? 'ano' : 'ne'}</li>*/}
          </ul>
        </li>
        <li>
          <h3 className="playgrounds-items--heading">Stín</h3>
          <p>{shadow()}</p>

          {/* tady podmínka pro zobrazí ano/ne a ne true/false */}
        </li>
        <li>
          <h3 className="playgrounds-items--heading">Povrch hřiště</h3>
          <ul>
            <p>{surface()}</p>
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
