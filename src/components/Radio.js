import React, { Component } from 'react'

class Radio extends Component {

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
          {this.getOptions().map(optionName =>
            <div key={optionName}>
              <input type='radio'
                     onClick={this.handleChange}
                     name={this.props.unique}
                     value={optionName}
                     defaultChecked={this.props.default === optionName}/>
              <label>{optionName}</label>
            </div>
          )}
      </div>
    );
  }
}

export default Radio
