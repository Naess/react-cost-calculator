# React Cost Calculator
A flexible and configurable cost calculator that updates the total in real-time as the user changes input values.
Demo: https://naess.github.io/react-cost-calculator/

### To install:
- Clone or download the code
- Run `npm install`
- Run `npm start` to run the Webpack dev server. A new tab should open with the app running at http://localhost:3000/.

### Customizing:
There's a file called `options-config.json` which stores the options and default values for each item in the form. To add new elements, just add them to this file and include the component to the render function in `Calculator.js`.

### Building:
Run `npm run build` to create a `build` folder, which is ready for deploy. This uses create-react-app, so more details can be found here: https://github.com/facebookincubator/create-react-app
