import React from 'react';

type Props = {
    handleClick: (tag: string) => void;
    tag: string;
    selectedTag: string;
};

export const ClearTag: React.FC<Props> = (props: Props) => {
    const { handleClick, tag, selectedTag } = props;

    return (
        <button className="tag-clearer" onClick={() => handleClick(tag)}>
            {selectedTag} X
        </button>
    );
};
