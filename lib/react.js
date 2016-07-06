module.exports = {
    "env": {
        "es6": true,
        "node": true
        "commonjs": true,
        "amd": false
    },
    "extends": "kwebbl/lib/browser",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
}
