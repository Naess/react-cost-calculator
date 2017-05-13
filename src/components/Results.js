import React, { Component } from 'react'
import {formatDollars} from '../utils/Currency.js'

class Results extends Component {

  render() {
    return (
      <div className="Row">
        <h3 className='Section-title Element-item'>{this.props.title}</h3>
        <strong>{formatDollars(this.props.total)}</strong>
      </div>
    );
  }
}

export default Results
