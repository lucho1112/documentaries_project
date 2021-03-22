import React from 'react';
import '../App.css';
import { DocType } from '../components/DocType';
import { DocVideo } from '../components/DocVideo';
import { Tag } from '../components/Tag';
import { DocumentaryType } from '../DataTypes';

type Props = {
    documentaries: DocumentaryType[];
    handleClick: (tag: string) => void;
};

export const DocPage: React.FC<Props> = (props: Props) => {
    const { documentaries, handleClick } = props;

    let docCard;
    documentaries.map((doc, i) => {
        if ('/movie/' + doc.slug === location.pathname) {
            docCard = (
                <div>
                    <DocType genre={doc.type} className="card-type" />

                    <h2 className="card-title">{doc.title}</h2>
                    <DocVideo link={doc.link} />

                    <div className="card-id">
                        <span>{doc.category}</span>
                        <span>{doc.year}</span>
                        <span>{doc.duration} minutes</span>
                    </div>
                    <p className="card-sum">{doc.description}</p>
                    {doc.tags.map((tag, i) => (
                        <Tag handleClick={handleClick} tag={tag} key={i} />
                    ))}
                </div>
            );
        }
    });

    return <div>{docCard}</div>;
};
