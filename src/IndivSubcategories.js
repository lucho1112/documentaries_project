import React, { Component } from 'react';
import { IndivSubcategory } from './IndivSubcategory';

export function IndivSubcategories(props) {

const { i, elt } = props;

function flatten(arr) {
    return [].concat(...arr)
  }
const splitSubcategories = elt.subcategory
    .split(/[\s,]+/)
    .filter(
      word => word.length > 0)

const indivSubcategories =
  flatten(splitSubcategories)




        return (
          indivSubcategories.map((subcategory, i) => {
            return <IndivSubcategory /*handleClick={this.props.handleClick}*/ subcategory={subcategory} />
          }
        )
      )

  };
