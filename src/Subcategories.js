import React from "react";
import Subcategory from "./Subcategory";

export const Subcategories = props => {
  const { elt, handleClick } = props;

  return elt.subcategories.map((tag, i) => {
    return <Subcategory handleClick={handleClick} subcategory={tag} key={i} />;
  });
};
