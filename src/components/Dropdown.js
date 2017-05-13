import React, { Component } from 'react'

class Dropdown extends Component {

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
        <select className='Element-item'
                defaultValue={this.getDefault()}
                onChange={this.handleChange}>
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
