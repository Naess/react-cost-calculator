import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';

const testOptions = {
  "Model": {
    "options": {
      "LX": 18740,
      "EX": 21140,
      "EX-T": 21500
    },
    "default": "LX"
  },
  "Powertrain": {
    "options": {
      "6-Speed Manual": 0,
      "CVT": 800
    },
    "default": "6-Speed Manual"
  }
}

describe('Calculator', () => {
  it('renders without crashing', () => {
    mount(<Calculator />)
  })

  describe('updateTotal', () => {
    it('updates the state when an element value changes', () => {
      const calculator = shallow(<Calculator />)
      const prevStateElems = calculator.instance().state.elements = {
        Model: "LX",
        Powertrain: "6-Speed Manual"
      }
      const options = calculator.instance().options = testOptions

      const caller = "Model"
      const newValue = "EX"

      calculator.instance().updateTotal(newValue, caller)
      const newStateElems = calculator.instance().state.elements

      expect(newStateElems).toMatchObject({
        Model: "EX",
        Powertrain: "6-Speed Manual"
      })
    })
  })

  describe('calculateTotal', () => {
    it('calculates the sum of every element value', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().state = {
        elements: {
          Model: "LX",
          Powertrain: "6-Speed Manual"
        },
        total: 18740
      }

      calculator.instance().state.elements.Powertrain = 'CVT'
      const newTotal = calculator.instance()
                                 .calculateTotal(calculator.instance().state.elements)
      expect(newTotal).toBe(19540)

    })
  })

  describe('getElementDefaults', () => {
    it('gets the elements with default from the options', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().options = testOptions

      const defaults = calculator.instance().getElementDefaults()
      expect(defaults).toMatchObject({
        Model: "LX",
        Powertrain: "6-Speed Manual"
      })

    })
  })

})
