import React, { Component } from "react";
import { DocList } from "./DocList";
import { ButtonCategories } from "./ButtonCategories";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "All",
      movieCategories: this.props.categories
    };
  }

  setCategory = (category) => {
    this.setState({
      displayCategory: category
    });
  }

  render() {
    const { movies, categories } = this.props;
    const { displayCategory } = this.state;
    return (
      <div>
        <ButtonCategories
          movies={movies}
          categories={categories}
          handleClick={this.setCategory}
        />
        <DocList
          movies={movies}
          setCategory={this.setCategory}
          displayCategory={displayCategory}
        />
      </div>
    );
  }
}
