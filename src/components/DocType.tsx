import React from 'react';

type Props = { genre: string; className: string };

export const DocType: React.FC<Props> = (props: Props) => {
    const { genre } = props;
    const genreOf = genre === 'Documentaire' ? 'red' : 'blue';
    const spanStyle = {
        backgroundColor: genreOf,
    };

    return (
        <p>
            <span style={spanStyle}>{genre}</span>
        </p>
    );
};
