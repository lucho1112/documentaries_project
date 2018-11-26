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
    this.setSubcategory = this.setSubcategory.bind(this);
  }
  setSubcategory(subcategory) {
    this.setState({
      displaySubcategory: subcategory,
    });
  }
  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render () {

    let filtered = this.props.movies.filter(
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
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ButtonTagAll
          handleClick={this.setSubcategory}
          subcategory="All" />
        {
          filtered
            .filter(
               (elt,i) => {
                 return (
                   this.props.displayCategory === elt.genre ||
                   this.props.displayCategory === "All"
                 )
               }
            )
            .filter(
               (elt,i) => {
                 return elt.subcategories.includes(this.state.displaySubcategory) ||
                 this.state.displaySubcategory === "All"
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
