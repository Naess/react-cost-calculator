# React Cost Calculator
A flexible and configurable cost calculator that updates the total in real-time as the user changes input values.

Demo: https://naess.github.io/react-cost-calculator/

### To install:
- Clone or download the code
- Run `npm install`
- Run `npm start` to run the Webpack dev server. A new tab should open with the app running at http://localhost:3000/.

### Customizing:
There's a file called `elements-config.json` which stores the element configurations for each item in the form. To add new elements, just add them to this file and include the components in the render function in `Calculator.js`.

Here is an example of an element in `elements-config.json`:
```javascript
"model": { // This key must be unique
  "title": "Model", // Displayed as section header
  "type": "dropdown", // dropdown | checkbox | radio | slider
  "options": { // Map of option:value
    "LX": 18740,
    "EX": 21140,
    "EX-T": 21500
  },
  "default": "LX" // Default value
}
```
This will then be defined in `Calculator.js` as:
```javascript
<Dropdown unique='model' // This must match the element key used below
          config={this.elements['model']}
          onUpdate={this.updateTotal} />
```

There are 4 element-type options:
- Dropdown
- Radio buttons
- Checkboxes
- Slider

They can all be used as many times as needed as long as they're all defined with a unique element key name in in `elements-config.json`.

### Building:
Run `npm run build` to create a `build` folder, which is ready for deploy. This is built on create-react-app, so more details can be found here: https://github.com/facebookincubator/create-react-app
