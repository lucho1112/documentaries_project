import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import dirtyData from './data.json';
import { Switch, Route } from 'react-router-dom';
import { DocCardPage } from './DocCardPage';
import { MainPage } from './MainPage';


// define a fn to clean dirtyData to cleanData; ie add id + slug
// dirtyData = [item1, item2, item3, ...]
// item1 = { topic: 'blabla' ... }
const serializeData = function(dirtyData) {
  // takes an item in the array of data and clean it
  const serializeItem = function(item, index) {
    item.id = index;
    item.slug = encodeURIComponent(item.topic);
    return item;
  };
  const cleanData = dirtyData.map(serializeItem);
  return cleanData;
};
// call the clean data fn
const data = serializeData(dirtyData);

const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const movieCategories = data
  .map(prod => prod.genre)
  .filter(uniqueItems);

function flatten(arr) {
    return [].concat(...arr)
  }
const listSubcategories = data
  .map(
    prod => prod.subcategory
    .split(/[\s,]+/)
    .filter(
      word => word.length > 0
    )
  )
const movieSubcategories =
  flatten(listSubcategories)
  .filter(uniqueItems)


movieCategories.push("All");
movieCategories.sort();
console.log(listSubcategories)

console.log(movieSubcategories)
console.log(movieCategories)
const MyMainPage = (props) => (
  <MainPage movies={data} categories={movieCategories} subcategories={movieSubcategories}/>
)
const MyDocCardPage = (props) => (
  <DocCardPage {...props} movies={data} subcategories={movieSubcategories} />
);

export class App extends Component {
  render() {
    return  (
      <Switch>
        <Route
          exact path='/'
          children={MyMainPage}
        />
        <Route
          path='/movie/:i'
          children={MyDocCardPage}
        />
      </Switch>
    )
  }
};

export default App;
