import React from 'react';
import { CategoryItem } from '../CategoryItem';
import './styles.css';

export const CategoryList = (props) => {
  const mapItems = (place, index) => (
    <CategoryItem
      key={place.id}
      {...place}
      category={props.category}
      handleClick={() => {
        props.setDataIndex(index);
        props.setActiveCategory(props.category);
      }}
    />
  );

  return (
    <div className="category-list">
      {props.category === 'playgrounds' ||
      props.category === 'groups' ||
      props.category === 'doctors'
        ? props.array.filter(props.filterItems).map(mapItems)
        : props.array.map(mapItems)}
    </div>
  );
};
