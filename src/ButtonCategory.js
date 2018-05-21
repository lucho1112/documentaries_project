import React, { Component } from 'react';

export class ButtonCategory extends Component {
  render () {
    return <button onClick={() => this.props.handleClick(this.props.category)}>{this.props.category}</button>
  }
}
