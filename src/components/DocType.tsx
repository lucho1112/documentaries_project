import React from 'react';
import { Link } from 'react-router-dom';

type Props = { type: string; setFilter: (key: string, value: string) => void };

export const DocType: React.FC<Props> = (props: Props) => {
    const { type, setFilter } = props;
    return (
        <Link to="/">
            <p onClick={() => setFilter('selectedType', type)}>{type}</p>
        </Link>
    );
};
