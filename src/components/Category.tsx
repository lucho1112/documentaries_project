import React from 'react';

type Props = {
    category: string;
    handleClick: (category: string) => void;
    selectedCategory: string;
};

export const Category: React.FC<Props> = (props: Props) => {
    const { category, handleClick, selectedCategory } = props;
    const focused: 'bold' | 'normal' = category === selectedCategory ? 'bold' : 'normal';
    const buttonStyle = {
        fontWeight: focused,
    };
    return (
        <div className="category-tab" onClick={() => handleClick(category)} style={buttonStyle}>
            {category}
        </div>
    );
};
