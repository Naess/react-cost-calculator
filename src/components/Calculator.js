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
    this.config = require('../../elements-config.json')
    let elems = this.getElementDefaults()
    let total = this.calculateTotal(elems)

    this.state = { total: total, elements: elems }
    this.updateTotal = this.updateTotal.bind(this)

    this.components = {
        dropdown: Dropdown,
        radio: Radio,
        checkbox: Checkbox,
        results: Results,
        slider: Slider
    }
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
    this.config.elements.forEach((element) => {
      elemDefaults[element.id] = this.getElementDefault(element)
    })
    return elemDefaults;
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
        <div className='Row'>
          <p className='Calculator-intro'>
            A flexible and configurable cost calculator that updates the total
             in real-time as the user changes input values.
          </p>
        </div>

        {this.config.elements.map((configElement) => {
          const ElementTag = this.components[configElement.type]
          return <ElementTag key={configElement.id}
                    unique={configElement.id}
                    config={configElement}
                    onUpdate={this.updateTotal} />
        })}

        <Results title='Total:' total={this.state.total} />

      </div>
    )
  }
}

export default Calculator
