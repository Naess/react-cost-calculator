import React from 'react'
import ReactDOM from 'react-dom'
import Slider from '../components/Slider'
import Calculator from '../components/Calculator'
import { shallow, mount } from 'enzyme';
import { sliderConfig } from './Configs.js'
import ReactTestUtils from 'react-dom/test-utils'

describe('Slider', () => {
  const mock = jest.genMockFunction()
  it('renders without crashing', () => {
    shallow(<Slider key={0}
            unique={0}
            config={sliderConfig}
            onUpdate={mock} />)
  })

  const slider = shallow(<Slider key={0}
          unique={0}
          config={{}}
          onUpdate={mock} />)

  it('renders with default blank string for the title', () => {
    expect(slider.instance().getTitle()).toBe('')
  })
  it('renders with default value of 0', () => {
    expect(slider.instance().getDefault()).toBe(0)
  })
  it('renders with default minimum of 0', () => {
    expect(slider.instance().getMin()).toBe(0)
  })
  it('renders with default maximum of 0', () => {
    expect(slider.instance().getMax()).toBe(0)
  })
  it('renders with default step of 1', () => {
    expect(slider.instance().getStep()).toBe(1)
  })
  it('renders with default conversion rate of 1', () => {
    expect(slider.instance().getConversionRate()).toBe(1)
  })

  describe('handleChange', () => {
    it('calls handleChange on change', () => {
      const slider = ReactTestUtils.renderIntoDocument(<Slider key={0}
              unique={0}
              config={sliderConfig}
              onUpdate={mock} />)
      const input = ReactTestUtils.findRenderedDOMComponentWithTag(slider,
                                                                   'input')
      ReactTestUtils.Simulate.change(input)
      expect(mock).toBeCalled()
    })
  })
})
