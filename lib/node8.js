module.exports = {
  "extends": "kwebbl/lib/node",
  "env": {
    "es8": true,
    "node": true,
    "commonjs": true
  },
  "parserOptions": {
      "ecmaVersion": 8,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
      },
      "sourceType": "module",
  },
  "rules": {
    "prefer-reflect": ["error", { "exceptions": ["getOwnPropertyNames"] }],
    "operator-linebreak": ["error", "after"],
    "no-confusing-arrow": "off"
  }
};
