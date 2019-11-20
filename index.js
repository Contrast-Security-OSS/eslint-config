'use strict';

module.exports = {
  env: {
    node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: { ecmaVersion: 2018 },
  plugins: ['mocha', 'node', 'prettier'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    complexity: ['error', 10],
    'prefer-const': 'error',
    'no-var': 'error',
    'node/shebang': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': ['error', { args: 'none' }],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: []
      }
    ],
    'node/no-unsupported-features/es-builtins': [
      'error',
      {
        ignores: []
      }
    ],
    'node/no-deprecated-api': [
      'warn',
      {
        ignoreModuleItems: ['domain', 'process.binding']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        tabWidth: 2,
        useTabs: false
      }
    ],
    'mocha/no-exclusive-tests': 'error'
  }
};
