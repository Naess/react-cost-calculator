import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';

const testOptions = {
  "Model": {
    "type": "dropdown",
    "options": {
      "LX": 18740,
      "EX": 21140,
      "EX-T": 21500
    },
    "default": "LX"
  },
  "Powertrain": {
    "type": "radio",
    "options": {
      "6-Speed Manual": 0,
      "CVT": 800
    },
    "default": "6-Speed Manual"
  },
  "Extras": {
    "type": "checkbox",
    "options": {
      "Body Side Molding": 217,
      "Car Cover": 230,
      "Decklid Spoiler": 299
    }
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
        Model: 18740,
        Powertrain: 0,
        Extras: 230
      }
      const options = calculator.instance().options = testOptions

      const caller = "Model"
      const newValue = 21140

      calculator.instance().updateTotal(newValue, caller)
      const newStateElems = calculator.instance().state.elements

      expect(newStateElems).toMatchObject({
        Model: 21140,
        Powertrain: 0,
        Extras: 230
      })
    })
  })

  describe('calculateTotal', () => {
    it('calculates the sum of every element value', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().state = {
        elements: {
          Model: 18740,
          Powertrain: 0,
          Extras: 230
        },
        total: 18970
      }

      calculator.instance().state.elements.Powertrain = 800
      const newTotal = calculator.instance()
                                 .calculateTotal(calculator.instance().state.elements)
      expect(newTotal).toBe(19770)

    })
  })

  describe('getElementDefaults', () => {
    it('gets the elements with default from the options', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().options = testOptions

      const defaults = calculator.instance().getElementDefaults()
      expect(defaults).toMatchObject({
        Model: 18740,
        Powertrain: 0,
        Extras: 0
      })

    })
  })

})
