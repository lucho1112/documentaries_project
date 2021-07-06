import React, { FunctionComponent, useState } from 'react';
import { db } from '../firbase.config';
import { DocumentaryType } from '../DataTypes';
import { slugify } from '../utils/helpers';
import './AddPost.scss';

type Props = {
    closeModal: () => void;
    isModalOpen: boolean;
};

export const AddPost: React.FC<Props> = (props: Props) => {
    const { closeModal, isModalOpen } = props;
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
        slug: '',
    };
    const [newPost, setNewPost] = useState(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newPostData = {
            ...newPost,
            [event.target.name]: event.target.value,
        };
        if (event.target.name === 'title') {
            newPostData = {
                ...newPost,
                title: event.target.value,
                slug: slugify(event.target.value),
            };
        }
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
    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(newPost.slug);
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
                slug: newPost.slug,
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
    if (!isModalOpen) {
        return null;
    }
    return (
        <div className="addPostContainer">
            <div className="addPost">
                <div className="addPost__close" onClick={() => closeModal()}></div>
                <form onSubmit={handleClick} id="add-post" className="addPost__form">
                    <input
                        className="addPost__form__input"
                        type="text"
                        name="type"
                        placeholder="type"
                        onChange={handleChange}
                    />
                    <input
                        className="addPost__form__input"
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                    />
                    <input
                        className="addPost__form__input"
                        type="text"
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                    />
                    <input
                        className="addPost__form__input"
                        type="text"
                        name="category"
                        placeholder="category"
                        onChange={handleChange}
                    />
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
                        <input
                            className="addPost__form__input"
                            type="text"
                            onKeyUp={(event) => addTags(event)}
                            placeholder="Press enter to add tags"
                        />
                    </div>
                    <input
                        className="addPost__form__input"
                        type="number"
                        name="duration"
                        placeholder="duration"
                        onChange={handleChange}
                    />
                    <input
                        className="addPost__form__input"
                        type="text"
                        name="language"
                        placeholder="language"
                        onChange={handleChange}
                    />
                    <input
                        className="addPost__form__input"
                        type="number"
                        name="year"
                        placeholder="year"
                        onChange={handleChange}
                    />
                    <input
                        className="addPost__form__input"
                        type="link"
                        name="link"
                        placeholder="video link"
                        onChange={handleChange}
                    />

                    <button className="addPost__form__submit" type="button" onClick={(event) => handleClick(event)}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
