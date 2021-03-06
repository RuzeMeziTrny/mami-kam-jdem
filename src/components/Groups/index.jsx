import React from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';
import './styles.css';

export const Groups = (props) => {
  return (
    <>
      <div className={`filters ${props.filterHidden ? 'filters--hidden' : ''}`}>
        <select
          className="filters__select"
          name="groups"
          id="groups"
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <option value="">Typ kroužku</option>
          <option value="language">cizí jazyky</option>
          <option value="music">hudební</option>
          <option value="creative">kreativní</option>
          <option value="sport">sportovní</option>
        </select>
        <button
          className="filters__button filters__button--groups"
          onClick={() => {
            props.setFilterHidden(!props.filterHidden);
            props.setDataIndex(null);
          }}
        >
          {props.filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
        </button>
      </div>
      <CategoryList
        dataArray={data.groups}
        setDataIndex={props.setDataIndex}
        setActiveCategory={props.setActiveCategory}
        category="groups"
        type={props.type}
        filterItems={(place) => props.filterItemsGroups(place, props.type)}
      />
    </>
  );
};
