// .eslintrc.js

module.exports = {
  "parser": "babel-eslint",

  "extends": "eslint:recommended",

  "env": {
    "browser": true
  },

  "globals": {
    "API_URL": true  // Replaced by webpack.
  },

  "rules": {
    "curly": 2,
    "dot-notation": 2,  // X: foo["bar"]
    "func-style": [2, "expression"],
    "indent": [2, 2],  // 2 space
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "linebreak-style": [2, "unix"],
    "max-len": [2, 80, 4],
    "max-statements": [1, 20],
    "no-multi-spaces": 2,
    "no-new-wrappers": 2,
    "no-trailing-spaces": 2,
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,  // a && b(), a || b
      "allowTernary": true  // a ? b() : c()
    }],
    "no-var": 2,
    "quotes": [2, "single"],
    "semi": 2,
  }
}
