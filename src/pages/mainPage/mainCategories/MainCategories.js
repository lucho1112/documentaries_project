import React from "react";
import { MainCategory } from "./MainCategory";

export const MainCategories = props => {
  const { categories, handleClick, displayCategory } = props;
  return categories.map((category, i) => {
    return (
      <MainCategory
        key={i}
        handleClick={handleClick}
        category={category}
        displayCategory={displayCategory}
      />
    );
  });
};
