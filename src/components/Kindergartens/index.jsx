import React from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';
import './styles.css';

export const Kindergartens = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.kindergartens}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="kindergartens"
      />
    </>
  );
};
