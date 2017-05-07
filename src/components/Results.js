import React, { Component } from 'react'
import {formatDollars} from '../utils/Currency.js'

class Results extends Component {

  render() {
    return (
      <div className="Row">
        <label className="Section-label">{this.props.title}</label>
        <strong>{formatDollars(this.props.total)}</strong>
      </div>
    );
  }
}

export default Results
