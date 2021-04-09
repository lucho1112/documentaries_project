import React, { FunctionComponent, useState, useEffect } from 'react';
// import './App.css';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { DocPage } from './containers/DocPage';
import { MainPage } from './containers/MainPage';
import { NavBar } from './containers/NavBar/NavBar';
import { AddPost } from './containers/AddPost';
import { db } from './firbase.config';
// import { DocumentaryType } from './DataTypes';

type State = {
    search: string;
    documentaries: any;
    error: null | string;
    activeFilter: {
        selectedTag: string;
        selectedType: string;
    };
};

const App: FunctionComponent = () => {
    const initialState: State = {
        search: '',
        documentaries: [],
        error: null,
        activeFilter: {
            selectedTag: '',
            selectedType: '',
        },
    };
    const [search, updateSearch] = useState(initialState.search);
    const [documentaries, setDocumentaries] = useState(initialState.documentaries);
    // const [error, setError] = useState(initialState.error);
    const [activeFilters, setFilter] = useState(initialState.activeFilter);

    const changeFilter = (key: string, value: string) => {
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
            <NavBar updateSearch={updateSearch} activeFilters={activeFilters} setFilter={changeFilter} />
            <Switch>
                <Route exact path="/">
                    <MainPage
                        documentaries={documentaries}
                        selectedTag={activeFilters.selectedTag}
                        setFilter={changeFilter}
                        search={search}
                        selectedType={activeFilters.selectedType}
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
