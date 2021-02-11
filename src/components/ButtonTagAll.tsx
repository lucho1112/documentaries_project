import React from 'react';

type Props = {
    handleClick: (subcategory: string) => void;
    subcategory: string;
    currentSubcategory: string;
};

const ButtonTagAll: React.FC<Props> = (props: Props) => {
    const { handleClick, subcategory, currentSubcategory } = props;

    return (
        <div>
            <div>{currentSubcategory}</div>
            <button className="tag-clearer" onClick={() => handleClick(subcategory)}>
                Clear Tag X
            </button>
        </div>
    );
};
export default ButtonTagAll;
