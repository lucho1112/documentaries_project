import React from 'react';
// import ButtonTagAll from '../components/ButtonTagAll';
import { DocCard } from '../components/DocCard';

type Props = {
    movies: {
        genre: string;
        topic: string;
        id: string;
        category: string;
        year: string;
        duration: string;
        plot: string;
        subcategories: string[];
    }[];
    selectedTag: string;
    setTag: (subcategory: string) => void;
    search: string;
    selectedCategory: string;
};

export const MainPage: React.FC<Props> = (props: Props) => {
    const { movies, setTag, selectedTag, search, selectedCategory } = props;
    const filtered = movies.filter((elt) => {
        return (
            elt.topic.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            elt.genre.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            elt.year.toString().indexOf(search.toLowerCase()) !== -1 ||
            elt.plot.toLowerCase().indexOf(search.toLowerCase()) !== -1
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
                    .filter((elt) => {
                        return selectedCategory === elt.genre || selectedCategory === 'All';
                    })
                    .filter((elt) => {
                        return elt.subcategories.includes(selectedTag) || selectedTag === 'All';
                    })
                    .map((elt, i) => (
                        <DocCard key={i} elt={elt} handleClick={setTag} />
                    ))}
            </div>
        </div>
    );
};
