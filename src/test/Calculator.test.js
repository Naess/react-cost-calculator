import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';

const testElements = {
  "model": {
    "title": "Model",
    "type": "dropdown",
    "options": {
      "LX": 18740,
      "EX": 21140,
      "EX-T": 21500
    },
    "default": "LX"
  },
  "powertrain": {
    "title": "Powertrain",
    "type": "radio",
    "options": {
      "6-Speed Manual": 0,
      "CVT": 800
    },
    "default": "6-Speed Manual"
  },
  "extras": {
    "title": "Extras",
    "type": "checkbox",
    "options": {
      "Body Side Molding": 217,
      "Car Cover": 230,
      "Decklid Spoiler": 299
    }
  },
  "mpg": {
    "title": "MPG",
    "type": "slider",
    "min": 5,
    "max": 60,
    "default": 30,
    "conversionRate": 2
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
        model: 18740,
        powertrain: 0,
        extras: 230,
        mpg: 60
      }
      const options = calculator.instance().options = testElements

      const caller = 'model'
      const newValue = 21140

      calculator.instance().updateTotal(newValue, caller)
      const newStateElems = calculator.instance().state.elements

      expect(newStateElems).toMatchObject({
        model: 21140,
        powertrain: 0,
        extras: 230,
        mpg: 60
      })
    })
  })

  describe('calculateTotal', () => {
    it('calculates the sum of every element value', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().state = {
        elements: {
          model: 18740,
          powertrain: 0,
          extras: 230,
          mpg: 60
        },
        total: 19030
      }

      calculator.instance().state.elements.powertrain = 800
      const newTotal = calculator.instance()
                                 .calculateTotal(calculator.instance().state.elements)
      expect(newTotal).toBe(19830)

    })
  })

  describe('getElementDefaults', () => {
    it('gets the elements with default from the element config', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().elements = testElements

      const defaults = calculator.instance().getElementDefaults()
      expect(defaults).toMatchObject({
        model: 18740,
        powertrain: 0,
        extras: 0,
        mpg: 60
      })
    })
  })

  describe('getElementDefault', () => {
    it('returns default value for an element with a default', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().elements = testElements

      const defaultValue = calculator.instance().getElementDefault({
        title: 'Powertrain',
        type: 'radio',
        options: {
          '6-Speed Manual': 0,
          'CVT': 800
        },
        default: 'CVT'
      })
      expect(defaultValue).toBe(800)
    })

    it('returns default value based on conversion rate for a slider element', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().options = testElements

      const defaultValue = calculator.instance().getElementDefault({
        title: 'MPG',
        type: 'slider',
        min: 5,
        max: 60,
        default: 30,
        conversionRate: 2
      })
      expect(defaultValue).toBe(60)
    })

    it('returns the 0 for an element without a default', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().options = testElements

      const defaultValue = calculator.instance().getElementDefault({
        title: 'Extras',
        type: 'checkbox',
        options: {
          'Body Side Molding': 217,
          'Car Cover': 230,
          'Decklid Spoiler': 299
        }
      })
      expect(defaultValue).toBe(0)
    })
  })

})
