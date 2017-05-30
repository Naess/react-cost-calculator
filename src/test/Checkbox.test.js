import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from '../components/Checkbox'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';
import { checkboxConfig } from './Configs.js'
import ReactTestUtils from 'react-dom/test-utils'

describe('Checkbox', () => {
  const mock = jest.genMockFunction()
  it('renders without crashing', () => {
    shallow(<Checkbox key={0}
            unique={0}
            config={checkboxConfig}
            onUpdate={mock} />)
  })

  const checkbox = shallow(<Checkbox key={0}
          unique={0}
          config={{ "type": "checkbox" }}
          onUpdate={mock} />)

  it('renders with default blank string for the title', () => {
    expect(checkbox.instance().getTitle()).toBe('')
  })
  it('renders with default empty array for the options', () => {
    expect(checkbox.instance().getOptions()).toEqual([])
  })

  describe('handleChange', () => {
    it('calls handleChange on check', () => {
      const checkbox = ReactTestUtils.renderIntoDocument(<Checkbox key={0}
              unique={0}
              config={checkboxConfig}
              onUpdate={mock} />)
      let input = ReactTestUtils.scryRenderedDOMComponentsWithTag(checkbox,
                                                                   'input')[1]
      ReactTestUtils.Simulate.click(input)
      expect(mock).toBeCalled()
    })

    const checkbox = shallow(<Checkbox key={0}
            unique={0}
            config={checkboxConfig}
            onUpdate={mock} />)
    checkbox.instance().state.total = 0

    it('adds the value to the total when checked', () => {
      const event = { target: { 'checked': true, value: 100 } }
      checkbox.instance().handleChange(event)
      const newStateTotal = checkbox.instance().state.total
      expect(newStateTotal).toBe(100)
    })
    it('subtracts the value to the total when un-checked', () => {
      const event = { target: { 'checked': false, value: 100 } }
      checkbox.instance().handleChange(event)
      const newStateTotal = checkbox.instance().state.total
      expect(newStateTotal).toBe(0)
    })
  })
})
