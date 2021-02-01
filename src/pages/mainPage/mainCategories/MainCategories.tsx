import React from "react";
import { MainCategory } from "./MainCategory";

type Props = {
  categories: string[],
  handleClick: Function,
  displayCategory: string
}

export const MainCategories = (props: Props) => {
  const { categories, handleClick, displayCategory } = props;
  return(
    <div>
      { categories.map((category, i) => {
          return (
            <MainCategory
              key={i}
              handleClick={handleClick}
              category={category}
              displayCategory={displayCategory}
            />
          );
        })}
    </div>
  )
};
