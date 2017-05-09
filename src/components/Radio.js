import React, { Component } from 'react'

class Radio extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  getOptions() {
      return this.props.options ? Object.entries(this.props.options) : []
  }

  handleChange(e) {
    this.props.onUpdate(parseInt(e.target.value, 10), this.props.unique)
  }

  render() {
    return (
      <div className='Row'>
        <label className='Section-label'>{this.props.title}</label>
          {this.getOptions().map(([optionName, optionValue]) =>
            <div key={optionName}>
              <input type='radio'
                     onClick={this.handleChange}
                     name={this.props.unique}
                     value={optionValue}
                     defaultChecked={this.props.default === optionName}/>
              <label>{optionName}</label>
            </div>
          )}
      </div>
    );
  }
}

export default Radio
