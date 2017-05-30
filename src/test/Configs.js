export const allElementsConfig = {
  "elements": [
    {
      "title": "Model",
      "type": "dropdown",
      "options": {
        "LX": 18740,
        "EX": 21140,
        "EX-T": 21500
      },
      "default": "LX"
    },
    {
      "title": "Powertrain",
      "type": "radio",
      "options": {
        "6-Speed Manual": 0,
        "CVT": 800
      },
      "default": "6-Speed Manual"
    },
    {
      "title": "Extras",
      "type": "checkbox",
      "options": {
        "Body Side Molding": 217,
        "Car Cover": 230,
        "Decklid Spoiler": 299
      }
    },
    {
      "title": "MPG",
      "type": "slider",
      "min": 5,
      "max": 60,
      "step": 1,
      "default": 30,
      "conversionRate": 2
    }
  ]
}

export const dropdownConfig = {
  "title": "Model",
  "type": "dropdown",
  "options": {
    "LX": 18740,
    "EX": 21140,
    "EX-T": 21500
  },
  "default": "LX"
}

export const radioConfig = {
  "title": "Powertrain",
  "type": "radio",
  "options": {
    "6-Speed Manual": 0,
    "CVT": 800
  },
  "default": "6-Speed Manual"
}

export const checkboxConfig = {
  "title": "Extras",
  "type": "checkbox",
  "options": {
    "Body Side Molding": 217,
    "Car Cover": 230,
    "Decklid Spoiler": 299
  }
}

export const sliderConfig = {
  "title": "MPG",
  "type": "slider",
  "min": 5,
  "max": 60,
  "step": 1,
  "default": 30,
  "conversionRate": 2
}
