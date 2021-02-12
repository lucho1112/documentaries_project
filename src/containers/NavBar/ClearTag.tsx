import React from 'react';

type Props = {
    handleClick: (subcategory: string) => void;
    subcategory: string;
    selectedTag: string;
};

export const ClearTag: React.FC<Props> = (props: Props) => {
    const { handleClick, subcategory, selectedTag } = props;

    return (
        <button className="tag-clearer" onClick={() => handleClick(subcategory)}>
            {selectedTag} X
        </button>
    );
};
