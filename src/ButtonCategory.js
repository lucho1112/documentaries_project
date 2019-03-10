import React from "react";

export const ButtonCategory = props => {
  const { category, handleClick } = props;
  return <button onClick={() => handleClick(category)}>{category}</button>;
};
