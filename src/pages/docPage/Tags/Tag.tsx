import React from 'react';

type Props = {
    handleClick: Function;
    tag: string;
    key: number;
};

const Subcategory = (props: Props) => {
    const { handleClick, tag } = props;
    return <button onClick={() => handleClick(tag)}>{tag}</button>;
};
export default Subcategory;
