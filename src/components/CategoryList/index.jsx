import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CategoryItemGeneral } from '../CategoryItemGeneral';
import { CategoryItemPlayground } from '../CategoryItemPlayground';
import './styles.css';

export const CategoryList = (props) => {
  return (
    <div className="category-list">
      <Switch>
        <Route
          path="/hriste"
          render={() =>
            props.array.map((place, index) => (
              <CategoryItemPlayground
                key={place.id}
                image={place.image}
                name={place.name}
                address={place.address}
                id={place.id}
                handleClick={() => {
                  props.setDataIndex(index);
                  props.setActiveCategory(props.category);
                }}
              />
            ))
          }
        />
        <Route
          render={() =>
            props.array.map((place, index) => (
              <CategoryItemGeneral
                key={place.id}
                image={place.image}
                name={place.name}
                address={place.address}
                web={place.web}
                handleClick={() => {
                  props.setDataIndex(index);
                  props.setActiveCategory(props.category);
                }}
              />
            ))
          }
        />
      </Switch>
    </div>
  );
};
