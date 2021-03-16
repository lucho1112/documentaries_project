import React from 'react';
import { Link } from 'react-router-dom';
import { DocType } from './DocType';
import { Tag } from './Tag';
import { DocumentaryType } from '../DataTypes';

type Props = {
    doc: DocumentaryType;
    handleClick: (tag: string) => void;
};
export const DocCard: React.FC<Props> = (props: Props) => {
    const { doc, handleClick } = props;

    return (
        <div className="card" id={doc.type}>
            <DocType genre={doc.type} className="card-type" />
            <Link to={`/movie/${doc.slug}`}>
                <h2 className="card-title">{doc.title}</h2>
            </Link>
            <div className="card-id">
                <span>{doc.category}</span>
                <span>{doc.year}</span>
                <span>{doc.duration} minutes</span>
            </div>
            <p className="card-sum">{doc.description}</p>
            <div className="card-tags">
                {doc.tags.map((tag, i) => (
                    <Tag handleClick={handleClick} tag={tag} key={i} />
                ))}
            </div>
        </div>
    );
};
