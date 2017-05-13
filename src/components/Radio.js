import React, { Component } from 'react'

class Radio extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  getTitle() {
      return this.props.config.title || ''
  }

  getOptions() {
      return this.props.config.options ? Object.entries(this.props.config.options) : []
  }

  getDefault() {
      return this.props.config.default || ''
  }

  handleChange(e) {
    this.props.onUpdate(parseInt(e.target.value, 10), this.props.unique)
  }

  render() {
    return (
      <div className='Row'>
        <h3 className='Section-title'>{this.getTitle()}</h3>
          {this.getOptions().map(([optionName, optionValue]) =>
            <div key={optionName}>
              <input type='radio'
                     onClick={this.handleChange}
                     name={this.props.unique}
                     value={optionValue}
                     defaultChecked={this.getDefault() === optionName}/>
              <label>{optionName}</label>
            </div>
          )}
      </div>
    );
  }
}

export default Radio
