import React from 'react'
import ReactDOM from 'react-dom'
import Radio from '../components/Radio'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';
import { radioConfig } from './Configs.js'
import ReactTestUtils from 'react-dom/test-utils'

describe('Radio', () => {
  const mock = jest.genMockFunction()
  it('renders without crashing', () => {
    shallow(<Radio key={0}
            unique={0}
            config={radioConfig}
            onUpdate={mock} />)
  })

  const radio = shallow(<Radio key={0}
          unique={0}
          config={{ "type": "radio" }}
          onUpdate={mock} />)

  it('renders with default blank string for the title', () => {
    expect(radio.instance().getTitle()).toBe('')
  })
  it('renders with default blank string for the value', () => {
    expect(radio.instance().getDefault()).toBe('')
  })
  it('renders with default empty array for the options', () => {
    expect(radio.instance().getOptions()).toEqual([])
  })

  describe('handleChange', () => {
    it('calls handleChange on click', () => {
      const radio = ReactTestUtils.renderIntoDocument(<Radio key={0}
              unique={0}
              config={radioConfig}
              onUpdate={mock} />)
      const option = ReactTestUtils.scryRenderedDOMComponentsWithTag(radio,
                                                                     'input')[1]
      ReactTestUtils.Simulate.click(option)
      expect(mock).toBeCalled()
    })
  })
})
