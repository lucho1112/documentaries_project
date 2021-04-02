import React from 'react';
import './NavBar.scss';
import { SearchBar } from './SearchBar';
import { SelectedFilter } from './SelectedFilter';

type Props = {
    updateSearch: (e: string) => void;
    setFilter: (key: string, value: string) => void;
    activeFilters: {
        selectedTag: string;
        selectedType: string;
    };
};

export const NavBar: React.FC<Props> = (props: Props) => {
    const { updateSearch, activeFilters, setFilter } = props;

    return (
        <div className="container">
            <SearchBar updateSearch={updateSearch} />
            {Object.entries(activeFilters).map(([filter, value]) => {
                return value !== '' && <SelectedFilter filter={filter} value={value} setFilter={setFilter} />;
            })}
        </div>
    );
};
