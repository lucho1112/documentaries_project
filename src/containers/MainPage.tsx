import React, { useState } from 'react';
import ButtonTagAll from '../components/ButtonTagAll';
import { DocCard } from '../components/DocCard';
import { Category } from '../components/Category';

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

export const MainPage: React.FC<Props> = (props: Props) => {
    const [search, updateSearch] = useState('');
    const [selectedCategory, setCategory] = useState('All');

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
            {categories.map((category, i) => {
                return (
                    <Category
                        key={i}
                        handleClick={setCategory}
                        category={category}
                        selectedCategory={selectedCategory}
                    />
                );
            })}
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
                        return selectedCategory === elt.genre || selectedCategory === 'All';
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
