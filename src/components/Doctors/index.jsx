import React from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';
import './styles.css';

export const Doctors = (props) => {
  return (
    <>
      <div className={`filters ${props.filterHidden ? 'filters--hidden' : ''}`}>
        <select
          className="filters__select"
          name="doctors"
          id="doctors"
          value={props.speciality}
          onChange={(event) => props.setSpeciality(event.target.value)}
        >
          <option value="">Specializace</option>
          <option value="alergologie">alergologie</option>
          <option value="dermatologie">dermatologie</option>
          <option value="fyzioterapie">fyzioterapie</option>
          <option value="logopedie">logopedie</option>
          <option value="oftalmologie">oční</option>
          <option value="orl">orl</option>
          <option value="ortodoncie">ortodoncie</option>
          <option value="ortopedie">ortopedie</option>
          <option value="pediatrie">pediatrie</option>
          <option value="stomatologie">stomatologie</option>
        </select>
        <button
          className="filters__button filters__button--doctors "
          onClick={() => {
            props.setFilterHidden(!props.filterHidden);
            props.setDataIndex(null);
          }}
        >
          {props.filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
        </button>
      </div>
      <CategoryList
        dataArray={data.doctors}
        setDataIndex={props.setDataIndex}
        setActiveCategory={props.setActiveCategory}
        category="doctors"
        speciality={props.speciality}
        filterItems={(place) =>
          props.filterItemsDoctors(place, props.speciality)
        }
      />
    </>
  );
};
