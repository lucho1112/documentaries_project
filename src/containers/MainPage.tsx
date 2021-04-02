import React from 'react';
import { DocCard } from '../components/DocCard';
import { DocumentaryType } from '../DataTypes';

type Props = {
    selectedTag: string;
    setFilter: (key: string, value: string) => void;
    search: string;
    selectedType: string;
    documentaries: DocumentaryType[];
};

export const MainPage: React.FC<Props> = (props: Props) => {
    const { selectedTag, search, selectedType, documentaries, setFilter } = props;
    let posts = documentaries;
    if (search !== '') {
        posts = documentaries.filter((doc) => {
            return (
                doc.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                doc.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
            );
        });
    }
    if (selectedType !== '') {
        posts = posts.filter((doc) => {
            return selectedType === doc.type || selectedType === '';
        });
    }
    if (selectedTag !== '') {
        posts = posts.filter((doc) => {
            return doc.tags.includes(selectedTag) || selectedTag === '';
        });
    }
    return (
        <div className="main">
            <div className="doclist">
                {posts.map((doc, i) => (
                    <DocCard key={i} doc={doc} setFilter={setFilter} />
                ))}
            </div>
        </div>
    );
};
