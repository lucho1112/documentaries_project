import React from 'react';
// import ButtonTagAll from '../components/ButtonTagAll';
import { DocCard } from '../components/DocCard';
import { DocumentaryType } from '../DataTypes';

type Props = {
    selectedTag: string;
    setTag: (subcategory: string) => void;
    search: string;
    selectedCategory: string;
    documentaries: DocumentaryType[];
};

export const MainPage: React.FC<Props> = (props: Props) => {
    const { setTag, selectedTag, search, selectedCategory, documentaries } = props;
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
                {/* {selectedTag !== 'All' && (
                    <ButtonTagAll
                        handleClick={setTag}
                        subcategory="All"
                        currentSubcategory={selectedTag}
                    />
                )} */}
                {filtered
                    .filter((doc) => {
                        return selectedCategory === doc.type || selectedCategory === 'All';
                    })
                    .filter((doc) => {
                        return doc.tags.includes(selectedTag) || selectedTag === 'All';
                    })
                    .map((doc, i) => (
                        <DocCard key={i} doc={doc} handleClick={setTag} />
                    ))}
            </div>
        </div>
    );
};
