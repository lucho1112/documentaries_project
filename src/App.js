import React, { Component } from "react";
import "./App.css";
import dirtyData from "./data.json";
import { Switch, Route } from "react-router-dom";
import { DocCardPage } from "./DocCardPage";
import { MainPage } from "./MainPage";

// define a fn to clean dirtyData to cleanData; ie add id + slug
// dirtyData = [item1, item2, item3, ...]
// item1 = { topic: 'blabla' ... }
function serializeData(dirtyData) {
  // takes an item in the array of data and clean it
  function serializeItem(item, index) {
    item.id = index;
    item.slug = encodeURIComponent(item.topic);

    function serializeSubcategory(dirtySub) {
      return dirtySub.split(" ").filter(el => {
        return typeof el === "string" && el.length > 1;
      });
    }
    item.subcategories = serializeSubcategory(item.subcategory);
    delete item.subcategory;
    return item;
  }

  const cleanData = dirtyData.map(serializeItem);
  return cleanData;
}
// call the clean data fn
const data = serializeData(dirtyData);
const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const movieCategories = data.map(prod => prod.genre).filter(uniqueItems);
movieCategories.push("All");
movieCategories.sort();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      displaySubcategory: "All",
      displayCategory: "All"
    };
  }
  setCategory = (category) => {
    this.setState({
      displayCategory: category
    });
  }
  setSubcategory = subcategory => {
    this.setState({
      displaySubcategory: subcategory
    });
  };
  updateSearch = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { displayCategory, displaySubcategory, search } = this.state;
    return (
      <Switch>
        <Route exact path="/">
          <MainPage
            movies={data}
            categories={movieCategories}
            displayCategory={displayCategory}
            displaySubcategory={displaySubcategory}
            search={search}
            setCategory={this.setCategory}
            setSubcategory={this.setSubcategory}
            updateSearch={this.updateSearch}
          />
        </Route>
        <Route
          path="/movie/:i"
          render={props => (
            <DocCardPage
              {...props}
              movies={data}
              categories={movieCategories}
              handleClick={this.setSubcategory}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
