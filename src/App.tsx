/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './App.css';
import { data, movieCategories } from './data/data';
import { Switch, Route } from 'react-router-dom';
import { DocCardPage } from './pages/docPage/DocPage';
import { MainPage } from './pages/mainPage/MainPage';

console.log(data);
console.log(movieCategories);
const App = (props: any) => {
  const [search, updateSearch] = useState('');
  const [displayCategory, setCategory] = useState('All');
  const [displaySubcategory, setSubcategory] = useState('All');

  return (
    <Switch>
      <Route exact path="/">
        <MainPage
          movies={data}
          categories={movieCategories}
          displayCategory={displayCategory}
          displaySubcategory={displaySubcategory}
          search={search}
          setCategory={setCategory}
          setSubcategory={setSubcategory}
          updateSearch={updateSearch}
        />
      </Route>
      <Route
        path="/movie/:i">
           <DocCardPage {...props} movies={data} handleClick={setSubcategory} />
        </Route>
    </Switch>
  );
};

export default App;
