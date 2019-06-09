import React from 'react'

const ButtonTagAll = props => {
  const { handleClick, subcategory, currentSubcategory } = props

  return (
    <div>
      <div>{currentSubcategory}</div>
      <button className="tag-clearer" onClick={() => handleClick(subcategory)}>
      Clear Tag X
      </button>
    </div>

  )
}
export default ButtonTagAll
