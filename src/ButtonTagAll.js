import React from "react";

const ButtonTagAll = props => {
  const { handleClick, subcategory } = props;

  return (
    <button className="tag-clearer" onClick={() => handleClick(subcategory)}>
      Clear Tags X
    </button>
  );
};
export default ButtonTagAll;
