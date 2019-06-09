import React from "react";

export const DocType = props => {
  const { genre } = props;
  const genreOf = genre === "Documentaire" ? "red" : "blue";
  const spanStyle = {
    backgroundColor: genreOf
  };

  return (
    <p>
      <span style={spanStyle}>{genre}</span>
    </p>
  );
};
