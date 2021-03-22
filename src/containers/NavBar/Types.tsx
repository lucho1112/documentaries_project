import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
    types: string[];
    setType: (type: string) => void;
};

export const Types: React.FC<Props> = (props: Props) => {
    const { types, setType } = props;
    const history = useHistory();
    const handleClick = (type: string) => {
        setType(type);
        if (history.location.pathname !== '/') {
            history.push('/');
        }
    };
    return (
        <div>
            {types.map((type) => {
                return (
                    <div key={type} className="category-tab" onClick={() => handleClick(type)}>
                        {type}
                    </div>
                );
            })}
        </div>
    );
};
