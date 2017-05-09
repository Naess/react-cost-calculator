import React, { Component } from 'react'

class Checkbox extends Component {

  constructor(props) {
    super(props)
    this.state = { total: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  getOptions() {
      return this.props.options ? Object.entries(this.props.options) : []
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
        <label className='Section-label'>{this.props.title}</label>
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
