import React, { useState } from 'react';
import { db } from '../firbase.config';
// import { InputTag } from '../components/InputTag';
export const AddPost = () => {
    const initialState = {
        type: '',
        title: '',
        description: '',
        category: '',
        tags: [],
        duration: 0,
        language: '',
        year: 0,
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
            const newTagData = [...newPost.tags, event.target.value];
            const newPostData = {
                ...newPost,
                newTagData,
            };
            setNewPost(newPostData);
            event.target.value = '';
        }
    };
    const removeTags = (index: number) => {
        const newTagData = [...newPost.tags.filter((tag) => newPost.tags.indexOf(tag) !== index)];
        const newPostData = {
            ...newPost,
            newTagData,
        };
        setNewPost(newPostData);
        // setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    };
    const handleSubmit = (event: { preventDefault: any }) => {
        event.preventDefault();
        db.collection('data')
            .add({
                newPost,
            })
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    };
    return (
        // genre: 'Documentaire',
        // topic: 'Buster Keaton Un genie brise par Hollywood',
        // mainspeaker: 'Buster Keaton',
        // plot: "Rétrospective de la vie de Buster Keaton dans le contexte du cinéma Hollywoodien des 30's 40's 50's...",
        // category: 'Cinéma',
        // subcategory: 'Acteur                                       Hollywood                             Producteur',
        // duration: 52,
        // language: 'Fr',
        // year: 2016,
        // link: 'https://www.youtube.com/watch?v=Q4N0hIU3Wuw',
        <form onSubmit={(event: any) => handleSubmit(event)}>
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

            <button type="submit">Submit</button>
        </form>
    );
};
