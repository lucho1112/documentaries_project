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
function serializeData(dirtyData) {
  // takes an item in the array of data and clean it
  function serializeItem(item, index) {
    item.id = index;
    item.slug = encodeURIComponent(item.topic);

    function serializeSubcategory(dirtySub) {
      return dirtySub.split(' ').filter((el) => {
        return typeof el === 'string' && el.length > 1
      })
    }
    item.subcategories = serializeSubcategory(item.subcategory);
    delete item.subcategory;
    return item;
  };

  const cleanData = dirtyData.map(serializeItem);
  return cleanData;
};
// call the clean data fn
const data = serializeData(dirtyData);
console.log(data);

const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const movieCategories = data
  .map(prod => prod.genre)
  .filter(uniqueItems);
movieCategories.push("All");
movieCategories.sort();

const MyMainPage = (props) => (
  <MainPage movies={data} categories={movieCategories}/>
)
const MyDocCardPage = (props) => (
  <DocCardPage {...props} movies={data}/>
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
