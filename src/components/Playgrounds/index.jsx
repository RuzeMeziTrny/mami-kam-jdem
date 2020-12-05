import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { CategoryList } from '../CategoryList';
import { PlaygroundsDetails } from '../PlaygroundsDetails';
import { data } from '../../data.js';
import './styles.css';

export const Playgrounds = (props) => {
  const [filterHidden, setFilterHidden] = useState(true);

  return (
    <>
      <div
        className={
          filterHidden
            ? 'filters filters--playgrounds-hidden filters--playgrounds'
            : 'filters filters--playgrounds'
        }
      >
        <select
          className="filters__button"
          name="elements"
          id="elements"
          value={props.playgroundsFilters.elements}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
              elements: event.target.value,
            })
          }
        >
          <option value="">Herní prvky</option>
          <option value="malá houpačka">malá houpačka</option>
          <option value="houpačka">houpačka</option>
          <option value="houpačka pro dvojice">houpačka pro dvojice</option>
          <option value="pískoviště">pískoviště</option>
          <option value="skluzavka">skluzavka</option>
          <option value="kolotoč">kolotoč</option>
        </select>
        <select
          className="filters__button"
          name="shadow"
          id="shadow"
          value={props.playgroundsFilters.shadow}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
              shadow: event.target.value,
            })
          }
        >
          <option value="">Stín</option>
          <option value={true}>ano</option>
          <option value={false}>ne</option>
        </select>
        <select
          className="filters__button"
          name="toys"
          id="toys"
          value={props.playgroundsFilters.toys}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
              toys: event.target.value,
            })
          }
        >
          <option value="">Erární hračky</option>
          <option value={true}>ano</option>
          <option value={false}>ne</option>
        </select>
        <select
          className="filters__button"
          name="surface"
          id="surface"
          value={props.playgroundsFilters.surface}
          onChange={(event) =>
            props.setPlaygroundsFilters({
              ...props.playgroundsFilters,
              surface: event.target.value,
            })
          }
        >
          <option value="">Povrch hřiště</option>
          <option value="písek">písek</option>
          <option value="kamínky">kamínky</option>
          <option value="tartan">tartan</option>
        </select>
        <button
          className="sub-filter__button sub-filter__button--playgrounds"
          onClick={() => setFilterHidden(!filterHidden)}
        >
          {filterHidden ? 'Zobrazit filtry' : 'Skrýt filtry'}
        </button>
      </div>

      <CategoryList
        dataArray={data.playgrounds}
        setDataIndex={props.setDataIndex}
        setActiveCategory={props.setActiveCategory}
        category="playgrounds"
        playgroundsFilters={props.playgroundsFilters}
        filterItems={(place) =>
          props.filterItemsPlaygrounds(place, props.playgroundsFilters)
        }
      />

      <Route
        path={`/hriste/:idhriste`}
        render={(routeprops) => {
          const IDhristezURL = routeprops.match.params.idhriste;
          const playground = data.playgrounds.find((place) => {
            return IDhristezURL === place.id ? true : false;
          });

          return (
            <PlaygroundsDetails
              key={playground.id}
              setDataIndex={props.setDataIndex}
              {...playground}
            />
          );
        }}
      />
    </>
  );
};
