module.exports = {
    "extends": "airbnb",
    // "plugins": [
    //     "react"
    // ],
    "parserOptions": {
      // "ecmaVersion": 6,
      "sourceType": "script",
    },
    // off, warn, error
    "rules": {
      "strict": ["error", "safe"],
      "camelcase": ["off", {properties: "never"}],
      "no-console": ["error", { allow: ["log", "error"] }],
      "consistent-return": ["off", { "treatUndefinedAsUnspecified": false }],
      "no-use-before-define": ["error", { "functions": false, "classes": false }],
      "no-underscore-dangle": ["warn", { "allow": ["_env", "_key", "_replace", "_arrayOf", "_hash", "_id", "_rev"], "allowAfterThis": true }],
      "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 5 }],
      "quote-props": ["error", "consistent"],
      "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
      "no-param-reassign": ["error", { "props": false }],
    }
};
