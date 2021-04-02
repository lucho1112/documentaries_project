import React from 'react';

type Props = { type: string; setFilter: any };

export const DocType: React.FC<Props> = (props: Props) => {
    const { type, setFilter } = props;
    return (
        <p onClick={() => setFilter('selectedType', type)}>
            <span>{type}</span>
        </p>
    );
};
