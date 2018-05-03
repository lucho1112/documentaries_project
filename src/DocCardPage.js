import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import { Link } from 'react-router-dom'
import { DocType } from './DocType';
import { DocVideo } from './DocVideo';


export class DocCardPage extends Component {

  render () {
    console.log(this.props.match.url)
    console.log(this.props.movies[9].topic)
    console.log('/movie/' + this.props.movies[9].topic)
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
                  <div className="card-tags">{elt.subcategory}</div>
          </div>
        )
      } else {
        return null
      }
    }

  )
  )
  }


/*
  render () {
    const movies = data.map( (movies) => {
    parseInt(props.match.params.topic, 10) }
  )
  if (!movies) {
    return <div>Sorry, but the player was not found</div>
  }
    return (
      <div>
          <DocType
            genre={data.genre}
            className= "card-type"
          />

            <DocTitle

              title={data.topic}
              className= "card-title"
            />


          <DocIDCard
            category={data.category}
            year={data.year}

            duration={data.duration}
            className= "card-id"
          />
          <DocSum

            plot={data.plot}
            className= "card-sum"
          />
          <DocTags

            tags={data.subcategory}
            className= "card-tags"
          />
      </div>
    );
  }
*/
}
