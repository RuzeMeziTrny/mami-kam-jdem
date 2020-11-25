import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export const Navigation = () => {
  const [opened, setOpened] = useState(true);

  const location = useLocation();

  const items = {
    '/': {
      label: 'Vše',
      icon: '../../assets/icons/all.svg',
      iconAlt: 'ikona miminko',
    },
    '/hriste': {
      label: 'Dětská hřiště',
      className: 'nav__link--playgrounds',
      icon: '../../assets/icons/playgrounds.svg',
      iconAlt: 'ikona kyblík a lopatka',
    },
    '/venkovni-arealy': {
      label: 'Venkovní areály',
      className: 'nav__link--outdoor-spaces',
      icon: '../../assets/icons/outdoor-spaces.svg',
      iconAlt: 'ikona větrník',
    },
    '/vnitrni-arealy': {
      label: 'Vnitřní areály',
      className: 'nav__link--inner-spaces',
      icon: '../../assets/icons/inner-spaces.svg',
      iconAlt: 'ikona stavba z kostek',
    },
    '/restaurace': {
      label: 'Restaurace, kavárny',
      className: 'nav__link--restaurants',
      icon: '../../assets/icons/restaurants.svg',
      iconAlt: 'ikona lžíce a vidlička',
    },
    '/krouzky': {
      label: 'Kroužky',
      className: 'nav__link--groups',
      icon: '../../assets/icons/groups.svg',
      iconAlt: 'ikona puzzle',
    },
    '/skolky': {
      label: 'Soukromé školky',
      className: 'nav__link--kindergartens',
      icon: '../../assets/icons/kindergartens.svg',
      iconAlt: 'ikona kostky',
    },
    '/lekari': {
      label: 'Dětští lékaři',
      className: 'nav__link--doctors',
      icon: '../../assets/icons/doctors.svg',
      iconAlt: 'ikona kříž',
    },
  };

  const selectedItem = items[location.pathname];

  return (
    <nav className="nav">
      <button onClick={() => setOpened(!opened)} className="nav__button">
        <img
          className="nav__category-icon"
          src={selectedItem.icon}
          alt={selectedItem.iconAlt}
        />
        <span
          className={`button__heading ${
            selectedItem.className ? selectedItem.className : ''
          }`}
        >
          {selectedItem.label}
        </span>
      </button>

      <ul
        className={opened ? 'nav__list--show' : 'nav__list'}
        onClick={() => setOpened(!opened)}
      >
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/playgrounds.svg"
            alt="ikona kyblík a lopatka"
          />
          <Link to="/hriste" className="nav__link nav__link--playgrounds">
            Dětská hřiště
          </Link>
        </li>
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/outdoor-spaces.svg"
            alt="ikona větrník"
          />
          <Link
            to="/venkovni-arealy"
            className="nav__link nav__link--outdoor-spaces"
          >
            Venkovní areály
          </Link>
        </li>
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/inner-spaces.svg"
            alt="ikona stavba z kostek"
          />
          <Link
            to="/vnitrni-arealy"
            className="nav__link nav__link--inner-spaces"
          >
            Vnitřní areály
          </Link>
        </li>
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/restaurants.svg"
            alt="ikona lžíce a vidlička"
          />
          <Link to="/restaurace" className="nav__link nav__link--restaurants">
            Restaurace, kavárny
          </Link>
        </li>
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/groups.svg"
            alt="ikona puzzle"
          />
          <Link to="/krouzky" className="nav__link nav__link--groups">
            Kroužky
          </Link>
        </li>
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/kindergartens.svg"
            alt="ikona kostky"
          />
          <Link to="/skolky" className="nav__link nav__link--kindergartens">
            Soukromé školky
          </Link>
        </li>
        <li className="nav__item">
          <img
            className="nav__category-icon"
            src="../../assets/icons/doctors.svg"
            alt="ikona kříž"
          />
          <Link to="/lekari" className="nav__link nav__link--doctors">
            Dětští lékaři
          </Link>
        </li>
      </ul>
    </nav>
  );
};
