import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/*import logo from './logo.svg';*/
import './App.css';
import dirtyData from './data.json';
import { Pagination } from './Pagination';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { DocCardPage } from './DocCardPage';
import { DocType } from './DocType';
import { DocList } from './DocList';


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
const MOVIE_CATEGORIES = data.map(prod => prod.genre).filter(
  uniqueItems
);


class ButtonCategory extends Component {
  render () {
      return (
        MOVIE_CATEGORIES.map((category,i) => {
          return <button onClick={this.props.onClick} category={category}>{category}</button>
        }
      )
    )
  }
};


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayCategory: 'All',
      movieCategories: MOVIE_CATEGORIES
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }

  render () {

    return (
      <div>
      <ButtonCategory onClick={this.setCategory} />
      <DocList movies={data}  setCategory={this.setCategory} state={this.state} />
    </div>
    );
  }
};

const MyDocCardPage = (props) => (
  <DocCardPage {...props} movies={data} />
);

export class App extends Component {
  render() {
    return  (
      <Switch>
        <Route
          exact path='/'
          component={Main}
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
