import React, { Component } from 'react'

class Checkbox extends Component {

  constructor(props) {
    super(props)
    this.state = { total: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  getTitle() {
      return this.props.config.title || ''
  }

  getOptions() {
      return this.props.config.options ? Object.entries(this.props.config.options) : []
  }

  handleChange(e) {
    const updateValue = parseInt(e.target.value, 10)
    const newTotal = e.target.checked ?
                     this.state.total + updateValue :
                     this.state.total - updateValue

    this.setState({ total: newTotal })
    this.props.onUpdate(newTotal, this.props.unique)
  }

  render() {
    return (
      <div className='Row'>
        <h3 className='Section-title'>{this.getTitle()}</h3>
          {this.getOptions().map(([optionName, optionValue]) =>
            <div key={optionName}>
              <input type='checkbox'
                     onClick={this.handleChange}
                     name={this.props.unique}
                     value={optionValue}/>
              <label>{optionName}</label>
            </div>
          )}
      </div>
    );
  }
}

export default Checkbox
