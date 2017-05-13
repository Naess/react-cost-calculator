import React, { Component } from 'react'

import calculator from '../img/calc.png'
import '../css/Calculator.css'

import Dropdown from './Dropdown.js'
import Radio from './Radio.js'
import Checkbox from './Checkbox.js'
import Results from './Results.js'
import Slider from './Slider.js'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.options = require('../../options-config.json')
    let elems = this.getElementDefaults()
    let total = this.calculateTotal(elems)

    this.state = { total: total, elements: elems }
    this.updateTotal = this.updateTotal.bind(this)
  }

  updateTotal(newValue, caller) {
    const newStateElems = Object.assign(this.state.elements, { [caller]: newValue })
    const newTotal = this.calculateTotal(newStateElems)

    this.setState({ elements: newStateElems, total: newTotal })
  }

  calculateTotal(stateElems) {
    const INITIAL_VALUE = 0
    return Object.entries(stateElems)
      .map(([name, value]) => value)
      .reduce((acc, value) => acc + value, INITIAL_VALUE)
  }

  getElementDefaults() {
    let elemDefaults = {}
    for (let option in this.options) {
      let elem = this.options[option]
      elemDefaults[option] = this.getElementDefault(elem)
    }
    return elemDefaults
  }

  getElementDefault(elem) {
    if (elem['type'].toLowerCase() === 'slider') {
      return elem['default'] * elem['conversionRate']
    }
    else {
      return elem['options'][elem.default] || 0
    }
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

        <Dropdown unique='model'
                  config={this.options['model']}
                  onUpdate={this.updateTotal} />

        <Radio unique='powertrain'
               config={this.options['powertrain']}
               onUpdate={this.updateTotal} />

        <Checkbox unique='extras'
                  config={this.options['extras']}
                  onUpdate={this.updateTotal}/>

        <Slider unique='mpg'
                config={this.options['mpg']}
                onUpdate={this.updateTotal} />

        <Results title='Total:' total={this.state.total} />

      </div>
    )
  }
}

export default Calculator
