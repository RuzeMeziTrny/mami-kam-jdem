import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { CategoryItemGeneral } from '../CategoryItemGeneral';
import { CategoryItemPlayground } from '../CategoryItemPlayground';
import './styles.css';

export const CategoryList = (props) => {
  const location = useLocation();

  /*
<Switch>
<Route path="/hriste" render={() => pole category item plg</>}
<Route render={() => pole category item general</>}
</Switch>
*/

  return (
    <div className="category-list">
      {location.pathname === '/hriste' /*startsWith('/hriste')*/
        ? props.array.map((place) => (
            <CategoryItemPlayground
              key={place.id}
              image={place.image}
              name={place.name}
              address={place.address}
              id={place.id}
            />
          ))
        : props.array.map((place) => (
            <CategoryItemGeneral
              key={place.id}
              image={place.image}
              name={place.name}
              address={place.address}
              web={place.web}
            />
          ))}
    </div>
  );
};
