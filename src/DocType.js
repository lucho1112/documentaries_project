import React, { Component } from 'react';


export class DocType extends Component {
  render () {

    if (this.props.genre === 'Documentaire') {
      var genreOf = 'red';
    } else {
      genreOf = 'blue';
    };
    const styles = {
      backgroundColor: genreOf
    }

    return ( <p><span  style={styles}>{this.props.genre}</span></p>);
}
}
