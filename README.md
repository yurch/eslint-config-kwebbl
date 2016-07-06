# eslint-config-kwebbl
ESLint Shareable Configs for Kwebbl projects

Check [ESLint configuring](http://eslint.org/docs/user-guide/configuring) to see config options you have.

## Provided Configurations
  * node.js 4.* : `kwebbl/lib/node4`
  * node.js 6.* : `kwebbl/lib/node`
  * browser app : `kwebbl/lib/browser`
  * react app : `kwebbl/lib/react`

## Simple start
  * [Install eslint](https://www.npmjs.com/package/eslint#installation-and-usage) or/and use one of [integrations](http://eslint.org/docs/user-guide/integrations) for your favorite code editor.
  * Install kwebbl configs:
```
npm i eslint-config-kwebbl --save-dev`
```
  * Create config file in root of your project `.eslintrc.js` or in [other formats](http://eslint.org/docs/user-guide/configuring#configuration-file-formats). And extend in it one of config more suitable for your project.
```javascript
module.exports = {
  "extends": "kwebbl/lib/node4",
}
```
  * Good to go. Use eslint by running it in cli or as plugin in your editor.
