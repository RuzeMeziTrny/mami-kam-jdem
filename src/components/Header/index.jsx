import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';
import { ContactForm } from '../ContactForm';
import './styles.css';

export const Header = (props) => {
  const location = useLocation();

  const [contactFormOpen, setContactFormOpen] = useState(false);

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
              props.setDataIndex(null);
              props.setViewport({
                latitude: props.latitudeStart,
                longitude: props.longitudeStart,
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

      <button
        className="header__form-button"
        onClick={() => {
          setContactFormOpen(true);
          props.setDataIndex(null);
        }}
      >
        <img
          className="header__form-icon"
          src="/assets/icons/envelope_white.svg"
          alt="obálka"
        />
        <p className="header__form-text">Napište nám</p>
        {/* <a href="mailto:someone@example.com">Napište nám</a> */}
      </button>

      {contactFormOpen && (
        <ContactForm
          onClose={() => setContactFormOpen(false)}
          setContactFormOpen={setContactFormOpen}
        />
      )}
    </header>
  );
};
