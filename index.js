'use strict';

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    complexity: ['error', 10],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      extends: ['plugin:node/recommended'],
      rules: {
        'node/no-deprecated-api': [
          'warn',
          {
            ignoreModuleItems: ['domain', 'process.binding'],
          },
        ],
      },
    },
    {
      files: ['*.spec.js', '*.test.js'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-exclusive-tests': 'error',
      },
    },
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ],
      },
    },
  ],
};

module.exports = config;
