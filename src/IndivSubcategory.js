import React, { Component } from 'react';


export class IndivSubcategory extends Component {
  render () {
    return <button /*onClick={() => this.props.handleClick(this.props.category)}*/>{this.props.subcategory}</button>
  }
}
