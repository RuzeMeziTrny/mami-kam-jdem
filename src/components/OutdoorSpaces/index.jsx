import React from 'react';
import { CategoryList } from '../CategoryList';
import { data } from '../../data.js';

export const OutdoorSpaces = ({ setDataIndex, setActiveCategory }) => {
  return (
    <>
      <CategoryList
        dataArray={data.outdoorSpaces}
        setDataIndex={setDataIndex}
        setActiveCategory={setActiveCategory}
        category="outdoorSpaces"
      />
    </>
  );
};
