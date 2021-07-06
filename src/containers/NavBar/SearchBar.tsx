import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
    updateSearch: (e: string) => void;
};

export const SearchBar: React.FC<Props> = (props: Props) => {
    const { updateSearch } = props;
    const history = useHistory();
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            updateSearch(event.target.value);
            if (history.location.pathname !== '/') {
                history.push('/');
            }
        }
    };
    return <input className="search-input" type="text" onKeyPress={handleKeyPress} />;
};
