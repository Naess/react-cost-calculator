import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';
import allElementsConfig from './Configs.js'

describe('Calculator', () => {
  it('renders without crashing', () => {
    mount(<Calculator />)
  })

  describe('updateTotal', () => {
    it('updates the state when an element value changes', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().state.elements = {
        model: 18740,
        powertrain: 0,
        extras: 230,
        mpg: 60
      }
      calculator.instance().options = allElementsConfig

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

  describe('getElementDefault', () => {
    it('returns default value for an element with a default', () => {
      const calculator = shallow(<Calculator />)
      calculator.instance().config = allElementsConfig

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
      calculator.instance().options = allElementsConfig

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
      calculator.instance().options = allElementsConfig

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
