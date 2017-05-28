import React, { Component } from 'react'

import calculatorLogo from '../img/calc.png'
import '../css/Calculator.css'

import Components from '../utils/Components.js'
import Results from '../components/Results.js'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.updateTotal = this.updateTotal.bind(this)
    this.config = require('../../elements-config.json')

    const elementDefaults = this.config.elements.map(this.getElementDefault)
    const total = this.calculateTotal(elementDefaults)
    this.state = { elements: elementDefaults, total: total }
  }

  getElementDefault(element) {
    if (element['type'].toLowerCase() === 'slider') {
      return element['default'] * element['conversionRate']
    }
    else {
      return element['options'][element.default] || 0
    }
  }

  calculateTotal(stateElements) {
    const INITIAL_VALUE = 0
    return Object.entries(stateElements)
      .map(([name, value]) => value)
      .reduce((acc, value) => acc + value, INITIAL_VALUE)
  }

  updateTotal(newValue, caller) {
    const newStateElements = Object.assign(this.state.elements, { [caller]: newValue })
    const newTotal = this.calculateTotal(newStateElements)
    this.setState({ elements: newStateElements, total: newTotal })
  }

  render() {
    return (
      <div className='Calculator'>
        <div className='Calculator-header'>
          <h1 className='Calculator-title'>
            <img src={calculatorLogo} className='Calculator-logo' alt='logo' />
            &nbsp; Cost Calculator
          </h1>
        </div>
        <div className='Row'>
          <p className='Calculator-intro'>
            A flexible and configurable cost calculator that updates the total
             in real-time as the user changes input values.
          </p>
        </div>

        {this.config.elements.map((configElement, i) => {
          const ElementTag = Components[configElement.type]
          return <ElementTag key={i}
                    unique={i}
                    config={configElement}
                    onUpdate={this.updateTotal} />
        })}

        <Results title='Total:' total={this.state.total} />

      </div>
    )
  }
}

export default Calculator
