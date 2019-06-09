import React from 'react'
import ButtonTagAll from './ButtonTagAll'
import { DocCard } from './DocCard'
import { ButtonCategories } from './ButtonCategories'

export const MainPage = props => {
  const {
    movies,
    categories,
    displaySubcategory,
    setSubcategory,
    search,
    updateSearch,
    displayCategory,
    setCategory
  } = props
  let filtered = movies.filter(elt => {
    return (
      elt.topic.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      elt.genre.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      elt.year.toString().indexOf(search.toLowerCase()) !== -1 ||
      elt.plot.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
  })
  return (
    <div className="main">
      <ButtonCategories
        movies={movies}
        categories={categories}
        handleClick={setCategory}
        displayCategory={displayCategory}
      />
      <input type="text" value={search} onChange={updateSearch} />
      <div className="doclist">
        {displaySubcategory !== 'All' && (
          <ButtonTagAll
            handleClick={setSubcategory}
            subcategory="All"
            currentSubcategory={displaySubcategory}
          />
        )}
        {filtered
          .filter(elt => {
            return displayCategory === elt.genre || displayCategory === 'All'
          })
          .filter(elt => {
            return (
              elt.subcategories.includes(displaySubcategory) ||
              displaySubcategory === 'All'
            )
          })
          .map((elt, i) => (
            <DocCard key={i} elt={elt} handleClick={setSubcategory} />
          ))}
      </div>
    </div>
  )
}
