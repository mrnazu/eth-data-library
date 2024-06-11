module.exports = {
    env: {
      node: true, // Enables Node.js global variables and modules
      es6: true,  // Enables ECMAScript 2015 features
    },
    extends: ['eslint:recommended'], // Extends the recommended ruleset from ESLint
    parserOptions: {
      sourceType: 'module', // Specifies the module type (CommonJS)
    },
    rules: {
        'semi': ['error', 'always']
    },
  };
  