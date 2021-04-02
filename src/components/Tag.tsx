import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    setFilter: any;
    tag: string;
    key: number;
};

export const Tag: React.FC<Props> = (props: Props) => {
    const { tag, setFilter } = props;
    return (
        <Link to="/">
            <button onClick={() => setFilter('selectedTag', tag)}>{tag}</button>
        </Link>
    );
};
