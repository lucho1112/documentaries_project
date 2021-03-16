import React, { useState, useEffect } from 'react';
import './App.css';
// import { data, movieCategories } from './data/data';
import { Switch, Route } from 'react-router-dom';
import { DocPage } from './containers/DocPage';
import { MainPage } from './containers/MainPage';
import { NavBar } from './containers/NavBar/NavBar';
import { AddPost } from './containers/AddPost';
import { db } from './firbase.config';

type State = {
    selectedTag: string;
    selectedType: string;
    search: string;
    documentaries: any;
    error: null | string;
    categories: string[];
};

const App = () => {
    const initialState: State = {
        selectedTag: 'All',
        selectedType: 'All',
        search: '',
        documentaries: [],
        error: null,
        categories: [],
    };
    const [selectedTag, setTag] = useState(initialState.selectedTag);
    const [search, updateSearch] = useState(initialState.search);
    const [selectedType, setType] = useState(initialState.selectedType);
    const [documentaries, setDocumentaries] = useState(initialState.documentaries);
    const [types, setTypes] = useState(initialState.categories);
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
                console.log('data fetched');
                const uniqueItems = (x: string, i: number, a: string[]) => a.indexOf(x) === i;
                const docTypes = fetchedData.map((documentary) => documentary.type).filter(uniqueItems);
                console.log(docTypes);
                setTypes(docTypes);
            });
        };
        fetchDocumentaries();
    }, []);
    return (
        <div>
            <AddPost />
            <NavBar
                updateSearch={updateSearch}
                types={types}
                setType={setType}
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
                        selectedType={selectedType}
                    />
                </Route>
                <Route path="/movie/:i">
                    <DocPage documentaries={documentaries} handleClick={setTag} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
