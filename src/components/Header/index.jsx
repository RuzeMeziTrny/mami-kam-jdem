import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';
import './styles.css';

export const Header = ({
  setDataIndex,
  setViewport,
  latitudeStart,
  longitudeStart,
}) => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === '/' ? (
        <h1 className="main-heading">Mami, kam jdem?</h1>
      ) : (
        <h1>
          <Link
            to="/"
            className="main-heading--link"
            onClick={() => {
              setDataIndex(null);
              setViewport({
                latitude: latitudeStart,
                longitude: longitudeStart,
                zoom: 13,
                transitionDuration: 2000,
                transitionInterpolator: new FlyToInterpolator(),
                transitionEasing: d3.easeCubic,
              });
            }}
          >
            Mami, kam jdem?
          </Link>
        </h1>
      )}

      <button className="header__form-button">
        <img
          className="header__form-icon"
          src="/assets/icons/envelope_white.svg"
          alt="obálka"
        />
        {/* <a href="mailto:someone@example.com">Napište nám</a> */}
        <Link to="/form" className="header__form-link">
          Napište nám
        </Link>
      </button>
    </header>
  );
};
