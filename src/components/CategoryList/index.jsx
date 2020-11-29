import React from 'react';
import { CategoryItem } from '../CategoryItem';
import './styles.css';

export const CategoryList = (props) => {
  return (
    <div className="category-list">
      {props.array.map((place, index) => (
        <CategoryItem
          key={place.id}
          {...place}
          category={props.category}
          handleClick={() => {
            props.setDataIndex(index);
            props.setActiveCategory(props.category);
          }}
        />
      ))}
    </div>
  );
};
