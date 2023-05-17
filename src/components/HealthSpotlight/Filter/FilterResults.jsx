import React from "react";
import FilterType from "./FilterType";
import Featured from "./Featured";

const FilterResults = () => {
  return (
    <div>
      <div className="hidden md:block">
        <FilterType type="Featured" />
      </div>
      <Featured />
    </div>
  );
};

export default FilterResults;
