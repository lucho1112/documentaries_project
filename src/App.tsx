import React, { useState, useEffect } from 'react';
// import './App.css';
import './App.scss';
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
    activeFilter: {
        selectedTag: string;
        selectedType: string;
    };
};

const App = () => {
    const initialState: State = {
        selectedTag: 'All',
        selectedType: 'All',
        search: '',
        documentaries: [],
        error: null,
        categories: [],
        activeFilter: {
            selectedTag: '',
            selectedType: '',
        },
    };
    const [selectedTag, setTag] = useState(initialState.selectedTag);
    const [search, updateSearch] = useState(initialState.search);
    const [selectedType, setType] = useState(initialState.selectedType);
    const [documentaries, setDocumentaries] = useState(initialState.documentaries);
    const [error, setError] = useState(initialState.error);
    const [activeFilters, setFilter] = useState(initialState.activeFilter);

    const changeFilter = (key: any, value: any) => {
        const newFilter = { ...activeFilters, [key]: value };
        setFilter(newFilter);
    };

    useEffect(() => {
        const fetchDocumentaries = async () => {
            const response = db.collection('data');
            await response.get().then((data) => {
                const fetchedData: any = [];
                data.forEach((item) => fetchedData.push({ ...item.data() }));
                setDocumentaries(fetchedData);
                console.log('data fetched');
            });
        };
        fetchDocumentaries();
    }, []);
    return (
        <div className="content">
            <NavBar
                updateSearch={updateSearch}
                setType={setType}
                selectedTag={selectedTag}
                selectedType={selectedType}
                setTag={setTag}
                activeFilters={activeFilters}
                setFilter={changeFilter}
            />
            <Switch>
                <Route exact path="/">
                    <MainPage
                        documentaries={documentaries}
                        selectedTag={selectedTag}
                        setFilter={changeFilter}
                        search={search}
                        selectedType={selectedType}
                    />
                </Route>
                <Route path="/movie/:i">
                    <DocPage documentaries={documentaries} setFilter={changeFilter} />
                </Route>
            </Switch>
            <AddPost />
        </div>
    );
};

export default App;
