import React from 'react';
import '../App.css';
import { DocType } from '../components/DocType';
import { DocVideo } from '../components/DocVideo';
import { Tag } from '../components/Tag';

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
};

export const DocPage: React.FC<Props> = (props: Props) => {
    const { movies, handleClick } = props;

    let docCard;
    movies.map((elt, i) => {
        if ('/movie/' + i === location.pathname) {
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
                    {elt.subcategories.map((tag, i) => (
                        <Tag handleClick={handleClick} tag={tag} key={i} />
                    ))}
                </div>
            );
        }
    });

    return <div>{docCard}</div>;
};