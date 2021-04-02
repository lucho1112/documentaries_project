import React from 'react';

type Props = {
    setTag: (tag: string) => void;
    selectedTag: string;
};

export const SelectedTag: React.FC<Props> = (props: Props) => {
    const { setTag, selectedTag } = props;

    return (
        <button className="tag-clearer" onClick={() => setTag('All')}>
            {selectedTag} X
        </button>
    );
};
