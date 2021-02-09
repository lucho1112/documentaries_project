import React from 'react';
import '../../App.css';
import { DocType } from '../../components/DocType';
import { DocVideo } from '../../components/DocVideo';
import { Tags } from './Tags/Tags';

type Props = {
    movies: {
        genre: string;
        topic: string;
        link: string;
        category: string;
        year: string;
        duration: string;
        plot: string;
        subcategories: string[];
    }[];
    handleClick: (tag: string) => void;
    match: any;
};

export const DocCardPage = (props: Props) => {
    const { movies, handleClick, match } = props;

    let docCard;
    movies.map((elt, i) => {
        if ('/movie/' + i === match.url) {
            docCard = (
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
                    <Tags tags={elt.subcategories} handleClick={handleClick} />
                </div>
            );
        }
    });

    return docCard;
};
