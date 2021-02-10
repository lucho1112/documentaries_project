import React, { useState } from 'react';
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
};

export const MainPage = (props: Props) => {
    const [search, updateSearch] = useState('');
    const [displayCategory, setCategory] = useState('All');

    // const [state, setState] = useState({ search: '', displayCategory: 'All', displaySubcategory: 'All' })
    // const setCategory = (category: string) =>
    //   setState({
    //     ...state,
    //     displayCategory: category
    //   })
    // const setSubcategory = (subcategory: string) =>
    //   setState({
    //     ...state,
    //     displaySubcategory: subcategory
    //   })
    // const updateSearch = (event: string) =>
    //   setState({
    //     ...state,
    //     search: event
    //   })
    // const { search, displayCategory, displaySubcategory } = state
    const { movies, categories, setSubcategory, displaySubcategory } = props;
    console.log(search);
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
            <MainCategories categories={categories} handleClick={setCategory} displayCategory={displayCategory} />
            <input type="text" value={search} onChange={(e) => updateSearch(e.target.value)} />
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
