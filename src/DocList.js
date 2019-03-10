import React, { Component } from 'react';
import { DocCard } from './DocCard';
import  ButtonTagAll from './ButtonTagAll'

export class DocList extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      displaySubcategory: 'All',
      movieSubcategories: this.props.subcategories,
    };
  }
  setSubcategory = (subcategory) => {
    this.setState({
      displaySubcategory: subcategory,
    });
  }
  updateSearch = (event) => {
    this.setState({search: event.target.value})
  }

  render () {
    const { movies, displayCategory } = this.props;
    const { search, displaySubcategory } = this.state;

    let filtered = movies.filter(
      (elt) => {
        return  (
          elt.topic.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          elt.genre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          elt.year.toString().indexOf(this.state.search.toLowerCase()) !== -1 ||
          elt.plot.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      }
    );
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={this.updateSearch.bind(this)}
        />
        <ButtonTagAll
          handleClick={this.setSubcategory}
          subcategory="All" />
        {
          filtered
            .filter(
               (elt) => {
                 return (
                   displayCategory === elt.genre ||
                   displayCategory === "All"
                 )
               }
            )
            .filter(
               (elt) => {
                 return elt.subcategories.includes(displaySubcategory) ||
                 displaySubcategory === "All"
               }
            )
            .map((elt,i) => <DocCard
                              key={i}
                              elt={elt}
                              handleClick={this.setSubcategory} /> )

        }
      </div>
    )
  }

}
