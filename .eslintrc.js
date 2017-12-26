module.exports = {
  "extends": "airbnb",
  "rules" : {
    "no-eval": 0, // depends on eval
    "react/prop-types": 0, // prop-types is evil
    "react/prefer-stateless-function": 0, // flexible project should not use this rule
    "object-curly-newline": 0,
    "max-len": 0,
    "max-lines": [2, {"max": 100}],

    // todo
    "react/jsx-filename-extension": 0,
    "prefer-rest-params": 0,
    "react/no-did-mount-set-state": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-console": 0
  },
  "globals": {
    "localStorage": true
  }
};
