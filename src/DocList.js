import React from "react";
import { DocCard } from "./DocCard";
import ButtonTagAll from "./ButtonTagAll";

export const DocList = props => {
  const {
    movies,
    displayCategory,
    displaySubcategory,
    setSubcategory,
    search,
    updateSearch
  } = props;

  let filtered = movies.filter(elt => {
    return (
      elt.topic.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      elt.genre.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      elt.year.toString().indexOf(search.toLowerCase()) !== -1 ||
      elt.plot.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });
  return (
    <div>
      <input type="text" value={search} onChange={updateSearch} />
      <ButtonTagAll handleClick={setSubcategory} subcategory="All" />
      {filtered
        .filter(elt => {
          return displayCategory === elt.genre || displayCategory === "All";
        })
        .filter(elt => {
          return (
            elt.subcategories.includes(displaySubcategory) ||
            displaySubcategory === "All"
          );
        })
        .map((elt, i) => (
          <DocCard key={i} elt={elt} handleClick={setSubcategory} />
        ))}
    </div>
  );
};
