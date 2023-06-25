import React from 'react';
import styles from '@/styles/styles';

const FilterType = (props) => {
  return (
    <>
      <h4 id={props.type} className={styles.subHeading2}>
        {props.type}
      </h4>
    </>
  );
};

export default FilterType;
