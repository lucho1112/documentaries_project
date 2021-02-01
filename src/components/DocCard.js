import React from "react";
import { Link } from "react-router-dom";
import { DocType } from "./DocType";
import { Tags } from "../pages/docPage/Tags/Tags";

export const DocCard = props => {
  const { i, elt, handleClick } = props;

  return (
    <div className="card" key={i} id={elt.genre}>
      <DocType genre={elt.genre} className="card-type" />
      <Link to={`/movie/${elt.id}`}>
        <h2 className="card-title">{elt.topic}</h2>
      </Link>
      <div className="card-id">
        <span>{elt.category}</span>
        <span>{elt.year}</span>
        <span>{elt.duration} minutes</span>
      </div>
      <p className="card-sum">{elt.plot}</p>
      <div className="card-tags">
        <Tags i={i} elt={elt} handleClick={handleClick} />
      </div>
    </div>
  );
};