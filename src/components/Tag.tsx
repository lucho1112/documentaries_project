import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    handleClick: (tag: string) => void;
    tag: string;
    key: number;
};

export const Tag: React.FC<Props> = (props: Props) => {
    const { handleClick, tag } = props;
    return (
        <Link to="/">
            <button onClick={() => handleClick(tag)}>{tag}</button>
        </Link>
    );
};
