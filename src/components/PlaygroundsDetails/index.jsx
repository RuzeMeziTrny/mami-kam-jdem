import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

export const PlaygroundsDetails = (props) => {
  const params = useParams();

  const shadowDisplay = (props) => {
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
    <div className="modal-drop">
      <article className="playgrounds-container">
        <button className="playgrounds-container__close-button">
          <Link className="playgrounds-container__link" to="/hriste">
            ×
          </Link>
        </button>
        <section className="playgrounds-info">
          <article>
            <h2 className="playgrounds-name">{props.name}</h2>

            <ul className="playgrounds-details">
              <li>
                <h3 className="playgrounds-items__heading">Herní prvky</h3>
                <ul className="playgrounds-items__list">
                  {props.elements.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h3 className="playgrounds-items__heading">Stín</h3>
                <p>{shadowDisplay(props)}</p>
              </li>
              <li>
                <h3 className="playgrounds-items__heading">Povrch hřiště</h3>
                <p>{props.surface.map((surface) => surface)}</p>
              </li>
              <li>
                <h3 className="playgrounds-items__heading">Erární hračky</h3>
                <p>{props.toys ? 'ano' : 'ne'}</p>
              </li>
            </ul>
          </article>
          <div className="playgrounds-photo">
            <img
              src={`/assets/images/${props.image}`}
              alt="obrázek hřiště"
            />
          </div>
        </section>
      </article>
    </div>
  );
};
