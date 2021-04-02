import React from 'react';

type Props = {
    setType: (tag: string) => void;
    selectedType: string;
};

export const SelectedType: React.FC<Props> = (props: Props) => {
    const { setType, selectedType } = props;

    return (
        <button className="tag-clearer" onClick={() => setType('All')}>
            {selectedType} X
        </button>
    );
};
