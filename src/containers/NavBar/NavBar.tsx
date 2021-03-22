import React from 'react';
import { SearchBar } from './SearchBar';
import { Types } from './Types';
import { ClearTag } from './ClearTag';

type Props = {
    updateSearch: (e: string) => void;
    types: string[];
    setType: (Type: string) => void;
    selectedTag: string;
    setTag: (tag: string) => void;
};

export const NavBar: React.FC<Props> = (props: Props) => {
    const { updateSearch, types, setType, selectedTag, setTag } = props;
    return (
        <div className="navbar">
            <SearchBar updateSearch={updateSearch} />
            {selectedTag !== 'All' && <ClearTag handleClick={setTag} tag="All" selectedTag={selectedTag} />}
            <Types types={types} setType={setType} />
        </div>
    );
};
