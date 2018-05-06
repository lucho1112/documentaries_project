import React from 'react';
import { Link } from 'react-router-dom';
import { DocType } from './DocType';

export function DocCard(props) {

  const { i, elt } = props;

  return (
    <div className="card" key={i} id={elt.genre}>
      <DocType
        genre={elt.genre}
        className= "card-type"
      />
      <Link to={`/movie/${i}`}>
        <h2 className="card-title">{elt.topic}</h2>
      </Link>
      <div className= "card-id">
        <span>{elt.category}</span>
        <span>{elt.year}</span>
        <span>{elt.duration} minutes</span>
      </div>
      <p className="card-sum">{elt.plot}</p>
      <div className="card-tags">{elt.subcategory}</div>
    </div>
  )
}
