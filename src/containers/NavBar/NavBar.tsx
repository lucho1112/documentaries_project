import React from 'react';
import { SearchBar } from './SearchBar';
import { Categories } from './Categories';
import { ClearTag } from './ClearTag';

type Props = {
    updateSearch: (e: string) => void;
    categories: string[];
    setCategory: (category: string) => void;
    selectedTag: string;
    setTag: (tag: string) => void;
};

export const NavBar: React.FC<Props> = (props: Props) => {
    const { updateSearch, categories, setCategory, selectedTag, setTag } = props;
    return (
        <div className="navbar">
            <SearchBar updateSearch={updateSearch} />
            {selectedTag !== 'All' && <ClearTag handleClick={setTag} subcategory="All" selectedTag={selectedTag} />}
            <Categories categories={categories} setCategory={setCategory} />
        </div>
    );
};
