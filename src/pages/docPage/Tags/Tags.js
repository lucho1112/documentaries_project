import React from "react";
import Tag from "./Tag";

export const Tags = props => {
  const { elt, handleClick } = props;

  return elt.subcategories.map((tag, i) => {
    return <Tag handleClick={handleClick} subcategory={tag} key={i} />;
  });
};
