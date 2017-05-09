import React, { Component } from 'react'

class Dropdown extends Component {

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
        <select defaultValue={this.props.default} onChange={this.handleChange}>
          {this.getOptions().map(([optionName, optionValue]) =>
            <option key={optionName}
                    value={optionValue}>{optionName}</option>
          )}
        </select>
      </div>
    );
  }
}

export default Dropdown
