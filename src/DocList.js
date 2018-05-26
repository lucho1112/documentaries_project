import React, { Component } from 'react';
import { DocCard } from './DocCard';

export class DocList extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
    };
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
        {
          filtered
          .filter(
             (elt,i) => {
               return (
                 this.props.state.displayCategory === elt.genre || this.props.state.displayCategory === "All"
               )
             }
          )
          .map((elt,i) => <DocCard i={i} elt={elt} /> )

        }
      </div>
    )
  }

}
