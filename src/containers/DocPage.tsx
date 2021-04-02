import React from 'react';
import '../App.css';
import { DocType } from '../components/DocType';
import { DocVideo } from '../components/DocVideo';
import { Tag } from '../components/Tag';
import { DocumentaryType } from '../DataTypes';

type Props = {
    documentaries: DocumentaryType[];
    setFilter: (key: string, value: string) => void;
};

export const DocPage: React.FC<Props> = (props: Props) => {
    const { documentaries, setFilter } = props;

    let docCard;
    documentaries.map((doc, i) => {
        if ('/movie/' + doc.slug === location.pathname) {
            docCard = (
                <div>
                    <DocType type={doc.type} setFilter={setFilter} />

                    <h2 className="card-title">{doc.title}</h2>
                    <DocVideo link={doc.link} />

                    <div className="card-id">
                        <span>{doc.category}</span>
                        <span>{doc.year}</span>
                        <span>{doc.duration} minutes</span>
                    </div>
                    <p className="card-sum">{doc.description}</p>
                    {doc.tags.map((tag, i) => (
                        <Tag tag={tag} key={i} setFilter={setFilter} />
                    ))}
                </div>
            );
        }
    });

    return <div>{docCard}</div>;
};
