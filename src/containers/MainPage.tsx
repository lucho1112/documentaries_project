import React from 'react';
import { DocCard } from '../components/DocCard';
import { DocumentaryType } from '../DataTypes';

type Props = {
    selectedTag: string;
    setFilter: any;
    search: string;
    selectedType: string;
    documentaries: DocumentaryType[];
};

export const MainPage: React.FC<Props> = (props: Props) => {
    const { selectedTag, search, selectedType, documentaries, setFilter } = props;
    const filtered = documentaries.filter((doc) => {
        return (
            doc.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            doc.type.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            doc.year.toString().indexOf(search.toLowerCase()) !== -1 ||
            doc.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
    });
    return (
        <div className="main">
            <div className="doclist">
                {filtered
                    .filter((doc) => {
                        return selectedType === doc.type || selectedType === 'All';
                    })
                    .filter((doc) => {
                        return doc.tags.includes(selectedTag) || selectedTag === 'All';
                    })
                    .map((doc, i) => (
                        <DocCard key={i} doc={doc} setFilter={setFilter} />
                    ))}
            </div>
        </div>
    );
};
