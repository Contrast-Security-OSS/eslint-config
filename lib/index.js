// @ts-check
'use strict';

/** @typedef {import('eslint').Linter.Config} Config} */
const config = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  rules: require('./rules/base'),
  overrides: [
    {
      files: ['test/**', '*.spec.*', '*.test.*'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-exports': ['off'],
        'mocha/no-setup-in-describe': ['off'],
      },
    },

    // js-specific rules
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      extends: ['plugin:node/recommended'],
      rules: {
        'node/no-deprecated-api': [
          'warn',
          { ignoreModuleItems: ['domain', 'process.binding'] },
        ],
      },
    },

    // typescript-specific rules
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: require('./rules/typescript'),
    },
  ],
};

module.exports = config;