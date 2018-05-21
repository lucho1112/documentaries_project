import React, { Component } from 'react';
import { DocList } from './DocList';
import { ButtonCategories } from './ButtonCategories';

export class MainPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      displayCategory: 'All',
      movieCategories: this.props.categories
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    console.log(category),
    this.setState({
      displayCategory: category
    });
  }

  render () {
    return (
      <div>
        <ButtonCategories
          movies={this.props.movies}
          categories={this.props.categories}
          handleClick={this.setCategory} />
        <DocList
          movies={this.props.movies}
          setCategory={this.setCategory}
          state={this.state} />
      </div>
    );
  }
};
