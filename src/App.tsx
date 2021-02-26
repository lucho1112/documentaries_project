import React, { useState } from 'react';
import './App.css';
import { data, movieCategories } from './data/data';
import { Switch, Route } from 'react-router-dom';
import { DocPage } from './containers/DocPage';
import { MainPage } from './containers/MainPage';
import { NavBar } from './containers/NavBar/NavBar';
import { AddPost } from './containers/AddPost';

const App: React.FC = () => {
    const [selectedTag, setTag] = useState('All');
    const [search, updateSearch] = useState('');
    const [selectedCategory, setCategory] = useState('All');
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
