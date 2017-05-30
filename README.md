# React Cost Calculator
[![Test coverage](https://img.shields.io/codecov/c/github/Naess/react-cost-calculator/master.svg)](https://codecov.io/github/Naess/react-cost-calculator)

A flexible and configurable cost calculator that updates the total in real-time as the user changes input values.

Demo: https://naess.github.io/react-cost-calculator/

### To install:
- Clone or download the code
- Run `npm install`
- Run `npm start` to run the Webpack dev server. A new tab should open with the app running at http://localhost:3000/.
- Run `npm test` to run the tests

### Customizing:
There's a file called `elements-config.json`, which stores the element configurations for each item in the form. To add new elements, just add them to this file. They are displayed in the order that they are added to the config.

Here is an example of an element in `elements-config.json`:
```javascript
{
  "title": "Model", // Displayed as section header
  "type": "dropdown", // dropdown | checkbox | radio | slider
  "options": {  // Map of option:value
    "LX": 18740,
    "EX": 21140,
    "EX-T": 21500
  },
  "default": "LX" // Default value
}
```

There are 4 element-type options, and they can all be used as many times as needed:
- Dropdown
- Radio buttons
- Checkboxes
- Slider

### Building:
Run `npm run build` to create a `build` folder, which is ready for deploy. This is built on create-react-app, so more details can be found here: https://github.com/facebookincubator/create-react-app
