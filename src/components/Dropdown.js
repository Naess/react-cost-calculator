import React, { Component } from 'react'

class Dropdown extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  getOptions() {
      return this.props.options ? Object.keys(this.props.options) : []
  }

  handleChange(e) {
    this.props.onUpdate(e.target.value, this.props.unique)
  }

  render() {
    return (
      <div className='Row'>
        <label className='Section-label'>{this.props.title}</label>
        <select defaultValue={this.props.default} onChange={this.handleChange}>
          {this.getOptions().map((optionName) =>
            <option key={optionName}
                    value={optionName}>{optionName}</option>
          )}
        </select>
      </div>
    );
  }
}

export default Dropdown
