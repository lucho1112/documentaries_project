import React, { useState } from 'react';
import './App.css';
import { data, movieCategories } from './data/data';
import { Switch, Route } from 'react-router-dom';
import { DocPage } from './containers/DocPage';
import { MainPage } from './containers/MainPage';

const App: React.FC = () => {
    const [displaySubcategory, setSubcategory] = useState('All');

    return (
        <Switch>
            <Route exact path="/">
                <MainPage
                    movies={data}
                    categories={movieCategories}
                    displaySubcategory={displaySubcategory}
                    setSubcategory={setSubcategory}
                />
            </Route>
            <Route path="/movie/:i">
                <DocPage movies={data} handleClick={setSubcategory} />
            </Route>
        </Switch>
    );
};

export default App;
