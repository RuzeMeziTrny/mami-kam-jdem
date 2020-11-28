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
            props.array.map((place) => (
              <CategoryItemPlayground
                key={place.id}
                image={place.image}
                name={place.name}
                address={place.address}
                id={place.id}
              />
            ))
          }
        />
        <Route
          render={() =>
            props.array.map((place) => (
              <CategoryItemGeneral
                key={place.id}
                image={place.image}
                name={place.name}
                address={place.address}
                web={place.web}
              />
            ))
          }
        />
      </Switch>
    </div>
  );
};
