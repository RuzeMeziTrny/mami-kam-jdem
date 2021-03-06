import React from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';

export const InnerSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.innerSpaces}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="innerSpaces"
      />
    </>
  );
};
