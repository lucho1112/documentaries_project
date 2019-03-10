import React from "react";
import { ButtonCategory } from "./ButtonCategory";

export const ButtonCategories = props => {
  const { categories, handleClick } = props;
  return categories.map((category, i) => {
    return (
      <ButtonCategory key={i} handleClick={handleClick} category={category} />
    );
  });
};
