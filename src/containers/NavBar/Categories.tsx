import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
    categories: string[];
    setCategory: (category: string) => void;
};

export const Categories: React.FC<Props> = (props: Props) => {
    const { categories, setCategory } = props;
    const history = useHistory();
    const handleClick = (category: string) => {
        setCategory(category);
        if (history.location.pathname !== '/') {
            history.push('/');
        }
    };
    return (
        <div>
            {categories.map((category) => {
                return (
                    <div key={category} className="category-tab" onClick={() => handleClick(category)}>
                        {category}
                    </div>
                );
            })}
        </div>
    );
};
