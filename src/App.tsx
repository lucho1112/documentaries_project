import React, { useState, useEffect } from 'react';
import './App.css';
import { data, movieCategories } from './data/data';
import { Switch, Route } from 'react-router-dom';
import { DocPage } from './containers/DocPage';
import { MainPage } from './containers/MainPage';
import { NavBar } from './containers/NavBar/NavBar';
import { AddPost } from './containers/AddPost';
import { db } from './firbase.config';

type State = {
    selectedTag: string;
    selectedCategory: string;
    search: string;
    documentaries: any;
    error: null | string;
};

const App = () => {
    const initialState: State = {
        selectedTag: 'All',
        selectedCategory: 'All',
        search: '',
        documentaries: [],
        error: null,
    };
    const [selectedTag, setTag] = useState(initialState.selectedTag);
    const [search, updateSearch] = useState(initialState.search);
    const [selectedCategory, setCategory] = useState(initialState.selectedCategory);
    const [documentaries, setDocumentaries] = useState(initialState.documentaries);
    const [error, setError] = useState(initialState.error);

    useEffect(() => {
        const fetchDocumentaries = async () => {
            const response = db.collection('data');
            const data = await response.get();
            const fetchedData: { [x: string]: any }[] = [];
            data.forEach((item) => {
                fetchedData.push({ ...item.data() });
            });
            setDocumentaries(fetchedData);
        };
        fetchDocumentaries();
    }, []);
    return (
        <div>
            <AddPost />
            <NavBar
                updateSearch={updateSearch}
                categories={movieCategories}
                setCategory={setCategory}
                selectedTag={selectedTag}
                setTag={setTag}
            />
            <Switch>
                <Route exact path="/">
                    <MainPage
                        movies={data}
                        selectedTag={selectedTag}
                        setTag={setTag}
                        search={search}
                        selectedCategory={selectedCategory}
                    />
                </Route>
                <Route path="/movie/:i">
                    <DocPage movies={data} handleClick={setTag} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
