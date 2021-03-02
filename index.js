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
    complexity: ['error', 10],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    // plugin-mocha
    'mocha/no-exclusive-tests': 'error',

    // plugin-node
    'node/shebang': 'off',
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

    // plugin-prettier
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        tabWidth: 2,
        useTabs: false
      }
    ]
  }
};
