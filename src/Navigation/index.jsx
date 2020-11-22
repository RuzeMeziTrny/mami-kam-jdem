import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Navigation = () => (
  <nav className="nav">
    <button className="nav__item nav__item--all">
      <img
        className="nav__category-icon"
        src="../assets/icons/vse.png"
        alt="ikona mimino"
      />
      Vše
    </button>

    <ul className="nav__list">
      <li className="nav__item">
        <img
          className="nav__category-icon"
          src="../assets/icons/hriste.png"
          alt="ikona kyblík a lopatka"
        />
        <Link to="/hriste" className="nav__link nav__link--playgrounds">
          Dětská hřiště
        </Link>
      </li>
      <li className="nav__item">
        <img
          className="nav__category-icon"
          src="../assets/icons/venkovni-arealy.png"
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
          src="../assets/icons/vnitrni-arealy.png"
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
          src="../assets/icons/restaurace.png"
          alt="ikona lžíce a vidlička"
        />
        <Link to="/restaurace" className="nav__link nav__link--restaurants">
          Restaurace, kavárny
        </Link>
      </li>
      <li className="nav__item">
        <img
          className="nav__category-icon"
          src="../assets/icons/krouzky.png"
          alt="ikona puzzle"
        />
        <Link to="/krouzky" className="nav__link nav__link--groups">
          Kroužky
        </Link>
      </li>
      <li className="nav__item">
        <img
          className="nav__category-icon"
          src="../assets/icons/skolky.png"
          alt="ikona kostky"
        />
        <Link to="/skolky" className="nav__link nav__link--kindergartens">
          Soukromé školky
        </Link>
      </li>
      <li className="nav__item">
        <img
          className="nav__category-icon"
          src="../assets/icons/lekari.png"
          alt="ikona kříž"
        />
        <Link to="/lekari" className="nav__link nav__link--doctors">
          Dětští lékaři
        </Link>
      </li>
    </ul>
  </nav>
);
