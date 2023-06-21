import React from 'react';
import FilterType from './FilterType';
import Featured from './Featured';

const FilterResults = ({ resources }) => {
  return (
    <div>
      <div className=''>
        <FilterType type='Featured' />
      </div>
      <Featured resources={resources} />
    </div>
  );
};

export default FilterResults;
