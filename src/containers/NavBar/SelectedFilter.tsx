import React from 'react';

type Props = {
    setFilter: any;
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
