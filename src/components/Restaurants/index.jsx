import React from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';
import './styles.css';

export const Restaurants = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.restaurants}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="restaurants"
      />
    </>
  );
};
