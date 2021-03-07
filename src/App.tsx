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
    categories: string[];
};

const App = () => {
    const initialState: State = {
        selectedTag: 'All',
        selectedCategory: 'All',
        search: '',
        documentaries: [],
        error: null,
        categories: [],
    };
    const [selectedTag, setTag] = useState(initialState.selectedTag);
    const [search, updateSearch] = useState(initialState.search);
    const [selectedCategory, setCategory] = useState(initialState.selectedCategory);
    const [documentaries, setDocumentaries] = useState(initialState.documentaries);
    const [categories, setCategories] = useState(initialState.categories);
    const [error, setError] = useState(initialState.error);

    useEffect(() => {
        const fetchDocumentaries = async () => {
            const response = db.collection('data');
            await response.get().then((data) => {
                const fetchedData: { [x: string]: any }[] = [];
                data.forEach((item) => {
                    fetchedData.push({ ...item.data() });
                });
                setDocumentaries(fetchedData);

                const uniqueItems = (x: string, i: number, a: string) => a.indexOf(x) === i;
                const docCategories = documentaries
                    .map((prod: { category: string }) => prod.category)
                    .filter(uniqueItems);
                console.log(docCategories);
                setCategories(docCategories);
            });
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
                        documentaries={documentaries}
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
