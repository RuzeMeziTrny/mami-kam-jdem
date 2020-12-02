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
    <>
      <div className="modal-drop">
        <div className="playgrounds-container">
          <button>
            <Link
              className="playgrounds-container--link"
              to="/hriste"
              onClick={() => props.setDataIndex(null)}
            >
              ×
            </Link>
          </button>
          <div>
            <h3 className="playgrounds-name">{props.name}</h3>

            <ul className="playgrounds-list">
              <li>
                <h3 className="playgrounds-items__heading">Herní prvky</h3>
                <ul className="playgrounds-others">
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
          </div>

          <img
            className="playgrounds-photo"
            src={`/assets/images/${props.image}`}
            alt="obrázek hřiště"
          />
        </div>
      </div>
    </>
  );
};
