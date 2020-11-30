import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

export const PlaygroundsDetails = (props) => {
  const params = useParams();

  const surface = (props) => {
    let surfaceElm = '';
    if (props.sand) {
      surfaceElm = 'písek';
    } else if (props.grain) {
      surfaceElm = 'kamínky';
    } else if (props.tartan) {
      surfaceElm = 'tartan';
    }
    return surfaceElm;
  };

  const shadow = (props) => {
    let shadowElm = '';
    if (props.shadow) {
      if (props.shadowDetails) {
        shadowElm = `ano - ${props.shadowDetails}`;
      } else {
        shadowElm = 'ano';
      }
    } else {
      shadowElm = 'ne';
    }
    return shadowElm;
  };

  return (
    <>
      <div className="modal-drop"></div>
      <div className="playgrounds-container">
        <button>
          <Link className="playgrounds-container--link" to="/hriste">
          🗙
          </Link>
        </button>
        <div>
          <h3 className="playgrounds-name">{props.name}</h3>

          <ul className="playgrounds-list">
            <li>
              <h3 className="playgrounds-items__heading">Herní prvky</h3>
              <ul className="playgrounds-others">
                {props.babySwing && <li>malá houpačka</li>}
                {props.swing && <li>houpačka</li>}
                {props.seeSaw && <li>houpačka pro dvojice</li>}
                {props.sandbox && <li>pískoviště</li>}
                {props.slide && <li>skluzavka</li>}
                {props.carousel && <li>kolotoč</li>}
                {props.others.map((other) => (
                  <li key={other}>{other}</li>
                ))}
              </ul>
            </li>
            <li>
              <h3 className="playgrounds-items__heading">Stín</h3>
              <p>{shadow(props)}</p>
            </li>
            <li>
              <h3 className="playgrounds-items__heading">Povrch hřiště</h3>
              <p>{surface(props)}</p>
            </li>
            <li>
              <h3 className="playgrounds-items__heading">Erární hračky</h3>
              <p>{props.toys ? 'ano' : 'ne'}</p>
            </li>
          </ul>
        </div>

        <img
          className="playgrounds-photo"
          src={`/assets/images/${props.image}`}
          alt="obrázek hřiště"
        />
      </div>
    </>
  );
};
