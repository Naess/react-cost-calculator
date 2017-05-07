import React, { Component } from 'react'

import calculator from '../img/calc.png'
import '../css/Calculator.css'

import Dropdown from './Dropdown.js'
import Radio from './Radio.js'
import Results from './Results.js'

const options = require('../../options-config.json')

class Calculator extends Component {

  constructor(props) {
    super(props)
    let elements = this.getElementDefaults()
    let total = this.calculateTotal(elements)

    this.state = { total: total, elements: elements}
    this.updateTotal = this.updateTotal.bind(this)
  }

  updateTotal(newValue, caller) {
    const newStateElements = Object.assign(this.state.elements, { [caller]: newValue })
    const newTotal = this.calculateTotal(newStateElements)

    this.setState({ elements: newStateElements, total: newTotal })
  }

  calculateTotal(stateElements) {
    const INITIAL_VALUE = 0
    return Object.entries(stateElements)
      .map(([name, value]) => options[name]['options'][value])
      .reduce((acc, value) => acc + value, INITIAL_VALUE)
  }

  getElementDefaults() {
    let elementDefaults = {}
    Object.keys(options).forEach((option) =>
      elementDefaults[option] = options[option]['default'])

    return elementDefaults
  }

  render() {
    return (
      <div className='Calculator'>
        <div className='Calculator-header'>
          <h1 className='Calculator-title'>
            <img src={calculator} className='Calculator-logo' alt='logo' />
            &nbsp; Cost Calculator
          </h1>
        </div>
        <p className='Calculator-intro'>
          A calculator built to give a user the ability to generate a total value
          based on a number of inputted variables and other stored values.
        </p>

        <Dropdown title='Model:'
                  unique='Model'
                  onUpdate={this.updateTotal}
                  options={options['Model']['options']}
                  default={this.state.elements['Model']} />

        <Radio title='Powertrain:'
               unique='Powertrain'
               onUpdate={this.updateTotal}
               options={options['Powertrain']['options']}
               default={this.state.elements['Powertrain']} />

        <Results title='Total:' total={this.state.total} />
      </div>
    )
  }
}

export default Calculator
