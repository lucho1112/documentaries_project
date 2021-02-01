import React from "react";

export const MainCategory = props => {
  const { category, handleClick, displayCategory } = props;
  const focused = category === displayCategory ? "bold" : "normal";
  const buttonStyle = {
    fontWeight: focused
  };
  return (
    <div
      className="category-tab"
      onClick={() => handleClick(category)}
      style={buttonStyle}
      displayCategory={displayCategory}
    >
      {category}
    </div>
  );
};
