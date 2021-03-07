import React, { useState } from 'react';
import { db } from '../firbase.config';
import { DocumentaryType } from '../DataTypes';

export const AddPost = () => {
    const initialState: DocumentaryType = {
        type: '',
        title: '',
        description: '',
        category: '',
        tags: [],
        duration: '',
        language: '',
        year: '',
        link: '',
    };
    const [newPost, setNewPost] = useState(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPostData = {
            ...newPost,
            [event.target.name]: event.target.value,
        };
        setNewPost(newPostData);
    };

    const addTags = (event: any) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            const newPostData = {
                ...newPost,
                tags: [...newPost.tags, event.target.value],
            };
            setNewPost(newPostData);
            event.target.value = '';
        }
    };
    const removeTags = (index: number) => {
        const newPostData = {
            ...newPost,
            tags: [...newPost.tags.filter((tag) => newPost.tags.indexOf(tag) !== index)],
        };
        setNewPost(newPostData);
    };
    const handleClick = (event: { preventDefault: any }) => {
        event.preventDefault();
        console.log(newPost);
        db.collection('data')
            .add({
                type: newPost.type,
                title: newPost.title,
                description: newPost.description,
                category: newPost.category,
                tags: newPost.tags,
                duration: newPost.duration,
                language: newPost.language,
                year: newPost.year,
                link: newPost.link,
            })
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
        setNewPost(initialState);
        document.querySelectorAll('input').forEach((input) => (input.value = ''));
    };
    return (
        <form onSubmit={handleClick} id="add-post">
            <input type="text" name="type" placeholder="type" onChange={handleChange} />
            <input type="text" name="title" placeholder="title" onChange={handleChange} />
            <input type="text" name="description" placeholder="description" onChange={handleChange} />
            <input type="text" name="category" placeholder="category" onChange={handleChange} />
            <div className="tags-input">
                <ul>
                    {newPost.tags.map((tag, index) => (
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
            <input type="number" name="duration" placeholder="duration" onChange={handleChange} />
            <input type="text" name="language" placeholder="language" onChange={handleChange} />
            <input type="number" name="year" placeholder="year" onChange={handleChange} />
            <input type="link" name="link" placeholder="video link" onChange={handleChange} />

            <button type="button" onClick={(event: any) => handleClick(event)}>
                Submit
            </button>
        </form>
    );
};
