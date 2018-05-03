import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DocType } from './DocType';
import data from './data.json';

export class DocCard extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
    };
  }
  updateSearch(event){
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

      )
    return (
      <div>

        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        {filtered.map((elt,i) => {
          return (
            <div className = "card" key={i} id={elt.genre}>
              <DocType
                genre={elt.genre}
                className= "card-type"
              />
              <Link to={`/movie/${i}`} movies={data}>
                <h2 className="card-title">{elt.topic}</h2>
              </Link>
              <div className= "card-id">
                <span>{elt.category}</span>
                <span>{elt.year}</span>
                <span>{elt.duration} minutes</span>
              </div>
              <p className="card-sum">{elt.plot}</p>
              <div className="card-tags">{elt.subcategory}</div>
            </div>
            )
          }
          )
        }
      </div>
    )
  }

}
