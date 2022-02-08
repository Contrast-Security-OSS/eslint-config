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
    'comma-dangle': ['error', 'only-multiline'],
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
    strict: ['error', 'safe'],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.*', '*.test.*'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-setup-in-describe': 'off',
      },
    },

    // js-specific rules
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

    // typescript-specific rules
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowedNames: ['self'],
          },
        ],

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
