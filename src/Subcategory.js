import React from 'react';

const Subcategory = (props) => {
  const {handleClick, subcategory} = props;
  return <button onClick={() => handleClick(subcategory)}>{subcategory}</button>
}
export default Subcategory
