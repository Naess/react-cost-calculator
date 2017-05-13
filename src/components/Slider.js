import React, { Component } from 'react'

class Slider extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  getTitle() {
      return this.props.config.title || ''
  }

  getMin() {
      return this.props.config.min || 0
  }

  getMax() {
      return this.props.config.max || 0
  }

  getStep() {
      return this.props.config.step || 1
  }

  getConversionRate() {
      return this.props.config.conversionRate || 1
  }

  getDefault() {
      return this.props.config.default || 0
  }

  handleChange(e) {
    let updatedTotal = parseInt(e.target.value, 10) * this.getConversionRate()
    this.props.onUpdate(updatedTotal, this.props.unique)
  }

  render() {
    return (
      <div className='Row'>
        <h3 className='Section-title'>{this.getTitle()}</h3>
        <label>{this.getMin()}</label>
        <input type='range'
               min={this.getMin()}
               max={this.getMax()}
               step={this.getStep()}
               defaultValue={this.getDefault()}
               onChange={this.handleChange}>
        </input>
        <label>{this.getMax()}</label>
      </div>
    );
  }
}

export default Slider
