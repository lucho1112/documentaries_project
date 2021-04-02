import React from 'react';
import './NavBar.scss';
import { SearchBar } from './SearchBar';
import { SelectedType } from './SelectedType';
import { SelectedTag } from './SelectedTag';
import { SelectedFilter } from './SelectedFilter';

type Props = {
    updateSearch: (e: string) => void;
    setFilter: any;
    setType: (type: string) => void;
    selectedTag: string;
    setTag: (tag: string) => void;
    selectedType: string;
    activeFilters: {
        selectedTag: string;
        selectedType: string;
    };
};

export const NavBar: React.FC<Props> = (props: Props) => {
    const { updateSearch, setType, selectedType, selectedTag, setTag, activeFilters, setFilter } = props;

    // for (const [key, value] of Object.entries(activeFilters)) {
    //     console.log(`${key}: ${value}`);
    //     value !== '' && `<p></p>`
    // }
    return (
        <div className="container">
            <SearchBar updateSearch={updateSearch} />
            {selectedTag !== 'All' && <SelectedTag setTag={setTag} selectedTag={selectedTag} />}
            {selectedType !== 'All' && <SelectedType setType={setType} selectedType={selectedType} />}
            {Object.entries(activeFilters).map(([filter, value]) => {
                return value !== '' && <SelectedFilter filter={filter} value={value} setFilter={setFilter} />;
            })}
        </div>
    );
};
