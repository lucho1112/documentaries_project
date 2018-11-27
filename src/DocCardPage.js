import React, { Component } from 'react';
import './App.css';
import { DocType } from './DocType';
import { DocVideo } from './DocVideo';
import { Subcategories } from './Subcategories'


export class DocCardPage extends Component {

  render () {
    console.log(this.props.handleClick)
    /*console.log(this.props.match.url)
    console.log(this.props.movies[9].topic)
    console.log('/movie/' + this.props.movies[9].topic)*//*
  export function DocCardPage(props) {
    const { movies, categories, handleClick } = props;*/
    return (

    this.props.movies.map( (elt, i) => {
      if ( ('/movie/' + i) === this.props.match.url) {
        return (
          <div>
              <DocType
                genre={elt.genre}
                className= "card-type"
              />

                <h2 className="card-title">{elt.topic}</h2>
                <DocVideo
                  link={elt.link}
                  />

                  <div className= "card-id">
                    <span>{elt.category}</span>
                    <span>{elt.year}</span>
                    <span>{elt.duration} minutes</span>
                  </div>
                  <p className="card-sum">{elt.plot}</p>
                  <Subcategories
                      i={i}
                      elt={elt}
                      handleClick={this.props.handleClick} />
          </div>
        )
      } else {
        return null
      }
    }

  )
  )
}
}
