import React, { Component } from 'react';
import { ButtonCategory } from './ButtonCategory';

export class ButtonCategories extends Component {
  render () {
      return (
        this.props.categories.map((category, i) => {
          return <ButtonCategory
                    key={i}
                    handleClick={this.props.handleClick}
                    category={category} />
        }
      )
    )
  }
};
