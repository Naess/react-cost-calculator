import React from 'react'
import ReactDOM from 'react-dom'
import Dropdown from '../components/Dropdown'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';
import { dropdownConfig } from './Configs.js'
import ReactTestUtils from 'react-dom/test-utils'

describe('Dropdown', () => {
  const mock = jest.genMockFunction()
  it('renders without crashing', () => {
    shallow(<Dropdown key={0}
            unique={0}
            config={dropdownConfig}
            onUpdate={mock} />)
  })

  const dropdown = shallow(<Dropdown key={0}
          unique={0}
          config={{}}
          onUpdate={mock} />)

  it('renders with default blank string for the title', () => {
    expect(dropdown.instance().getTitle()).toBe('')
  })
  it('renders with default blank string for the value', () => {
    expect(dropdown.instance().getDefault()).toBe('')
  })
  it('renders with default empty array for the options', () => {
    expect(dropdown.instance().getOptions()).toEqual([])
  })

  describe('handleChange', () => {
    it('calls handleChange on change', () => {
      const dropdown = ReactTestUtils.renderIntoDocument(<Dropdown key={0}
              unique={0}
              config={dropdownConfig}
              onUpdate={mock} />)
      const select = ReactTestUtils.findRenderedDOMComponentWithClass(dropdown,
                                                                      'Element-item')
      ReactTestUtils.Simulate.change(select)
      expect(mock).toBeCalled()
    })
  })
})
