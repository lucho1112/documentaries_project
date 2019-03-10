import React from "react";

export const ButtonCategory = props => {
  const { category, handleClick, displayCategory } = props;
  const focused = category === displayCategory ? "bold" : "normal";
  const buttonStyle = {
    fontWeight: focused
  };
  return (
    <div
      onClick={() => handleClick(category)}
      style={buttonStyle}
      displayCategory={displayCategory}
    >
      {category}
    </div>
  );
};
