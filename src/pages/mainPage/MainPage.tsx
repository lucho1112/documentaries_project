import React from 'react';
import ButtonTagAll from './ButtonTagAll';
import { DocCard } from '../../components/DocCard';
import { MainCategories } from './mainCategories/MainCategories';

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
    categories: string[];
    displaySubcategory: string;
    setSubcategory: (subcategory: string) => void;
    search: string;
    // line below to fix
    updateSearch: any;
    displayCategory: string;
    setCategory: (category: string) => void;
};

export const MainPage = (props: Props) => {
    const {
        movies,
        categories,
        displaySubcategory,
        setSubcategory,
        search,
        updateSearch,
        displayCategory,
        setCategory,
    } = props;
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
            <MainCategories
                // movies={movies}
                categories={categories}
                handleClick={setCategory}
                displayCategory={displayCategory}
            />
            <input type="text" value={search} onChange={updateSearch} />
            <div className="doclist">
                {displaySubcategory !== 'All' && (
                    <ButtonTagAll
                        handleClick={setSubcategory}
                        subcategory="All"
                        currentSubcategory={displaySubcategory}
                    />
                )}
                {filtered
                    .filter((elt) => {
                        return displayCategory === elt.genre || displayCategory === 'All';
                    })
                    .filter((elt) => {
                        return elt.subcategories.includes(displaySubcategory) || displaySubcategory === 'All';
                    })
                    .map((elt, i) => (
                        <DocCard key={i} elt={elt} handleClick={setSubcategory} />
                    ))}
            </div>
        </div>
    );
};
