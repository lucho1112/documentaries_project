import React from 'react';
import Subcategory from './Subcategory';

export function Subcategories(props) {
  const { elt, handleClick } = props;

  return (
    elt.subcategories.map((tag, i) => {
      return <Subcategory
                handleClick={handleClick}
                subcategory={tag}
                key={i} />
    })
  )
};
