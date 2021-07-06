import React from 'react';

type Props = {
    setFilter: (key: string, value: string) => void;
    value: string;
    filter: string;
};

export const SelectedFilter: React.FC<Props> = (props: Props) => {
    const { setFilter, value, filter } = props;

    return (
        <button className="tag-clearer" onClick={() => setFilter(filter, '')}>
            {value} X
        </button>
    );
};
