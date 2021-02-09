import React from 'react';

type Props = {
    category: string;
    handleClick: (category: string) => void;
    displayCategory: string;
};

export const MainCategory = (props: Props) => {
    const { category, handleClick, displayCategory } = props;
    const focused: 'bold' | 'normal' = category === displayCategory ? 'bold' : 'normal';
    const buttonStyle = {
        fontWeight: focused,
    };
    return (
        <div className="category-tab" onClick={() => handleClick(category)} style={buttonStyle}>
            {category}
        </div>
    );
};
