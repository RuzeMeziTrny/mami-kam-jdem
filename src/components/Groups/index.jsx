import React, { useState } from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';
import './styles.css';

export const Groups = (props) => {
  const [filterHidden, setFilterHidden] = useState(true);

  return (
    <>
      <div
        className={
          filterHidden
            ? 'filters-tablet filters-hidden filters--groups'
            : 'filters-tablet filters--groups'
        }
      >
        <select
          className="filters__button"
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
          className="sub-filter__button sub-filter__button--groups"
          onClick={() => setFilterHidden(!filterHidden)}
        >
          {filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
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
