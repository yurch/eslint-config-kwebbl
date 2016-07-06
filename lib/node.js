module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "kwebbl/lib/common",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module",
    },
    "rules": {
      "no-console": ["error", { allow: ["log", "error"] }],
      "prefer-spread": "error",
      "prefer-reflect": "error",
      "consistent-return": "off",
      "sort-vars": "off",
      "vars-on-top": "off",
      "no-process-env": "warn",
      "no-process-exit": "warn",
    }
}
