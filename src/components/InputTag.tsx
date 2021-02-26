import React, { useState } from 'react';

export const InputTag = () => {
    const initialState: string[] | (() => string[]) = [];
    const [tags, setTags] = useState(initialState);
    const addTags = (event: any) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            const newTags = [...tags, event.target.value];
            setTags(newTags);
            event.target.value = '';
        }
    };
    const removeTags = (index: number) => {
        setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="tags-input">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <i className="material-icons" onClick={() => removeTags(index)}>
                            close
                        </i>
                    </li>
                ))}
            </ul>
            <input type="text" onKeyUp={(event) => addTags(event)} placeholder="Press enter to add tags" />
        </div>
    );
};
