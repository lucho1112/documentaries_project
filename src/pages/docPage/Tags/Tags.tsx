import React from 'react';
import Tag from './Tag';

type Props = {
    handleClick: Function;
    tags: string[];
};

export const Tags = (props: Props) => {
    const { tags, handleClick } = props;

    return (
        <div>
            {tags.map((tag, i) => (
                <Tag handleClick={handleClick} tag={tag} key={i} />
            ))}
        </div>
    );
};
