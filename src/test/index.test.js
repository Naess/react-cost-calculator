import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../components/Calculator'
import '../index.js'

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calculator/>, div)
    global.document.getElementById('root')
    expect(ReactDOM.render).toBeCalled()
  })
})
