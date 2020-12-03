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

  const filterResult = () => {
    const filtered =
      props.filterItems != null
        ? props.dataArray.filter(props.filterItems)
        : props.dataArray;

    if (filtered.length === 0) {
      return (
        <p className="category-list__no-result">
          Bohužel žádná položka nevyhovuje vašemu výběru.
        </p>
      );
    }

    return filtered.map(mapItems);
  };

  return <div className="category-list">{filterResult()}</div>;
};
