import React from "react";
import { DocList } from "./DocList";
import { ButtonCategories } from "./ButtonCategories";

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
  } = props;
  return (
    <div>
      <ButtonCategories
        movies={movies}
        categories={categories}
        handleClick={setCategory}
      />
      <DocList
        movies={movies}
        setCategory={this.setCategory}
        setSubcategory={setSubcategory}
        displayCategory={displayCategory}
        displaySubcategory={displaySubcategory}
        search={search}
        updateSearch={updateSearch}
      />
    </div>
  );
};
