import React from 'react';
import { Link } from 'react-router-dom';
import { DocType } from './DocType';
import { Tags } from '../pages/docPage/Tags/Tags';

type Props = {
    elt: {
        genre: string;
        topic: string;
        id: string;
        category: string;
        year: string;
        duration: string;
        plot: string;
        subcategories: string[];
    };
    handleClick: (tag: string) => void;
};
export const DocCard = (props: Props) => {
    const { elt, handleClick } = props;

    return (
        <div className="card" id={elt.genre}>
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
                <Tags tags={elt.subcategories} handleClick={handleClick} />
            </div>
        </div>
    );
};
