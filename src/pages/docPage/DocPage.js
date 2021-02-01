import React from "react";
import "../../App.css";
import { DocType } from "../../components/DocType";
import { DocVideo } from "../../components/DocVideo";
import { Tags } from "./Tags/Tags";

export const DocCardPage = props => {
  const { movies, handleClick, match } = props;
  return movies.map((elt, i) => {
    if ("/movie/" + i === match.url) {
      return (
        <div>
          <DocType genre={elt.genre} className="card-type" />

          <h2 className="card-title">{elt.topic}</h2>
          <DocVideo link={elt.link} />

          <div className="card-id">
            <span>{elt.category}</span>
            <span>{elt.year}</span>
            <span>{elt.duration} minutes</span>
          </div>
          <p className="card-sum">{elt.plot}</p>
          <Tags i={i} elt={elt} handleClick={handleClick} />
        </div>
      );
    } else {
      return null;
    }
  });
};
