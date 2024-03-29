// @ts-check
'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  rules: require('./rules/base'),
  overrides: [
    // js-specific rules
    {
      files: ['*.js', '*.cjs'],
      extends: ['plugin:node/recommended-script'],
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        'node/no-deprecated-api': [
          'warn',
          {
            ignoreModuleItems: ['domain', 'process.binding'],
          },
        ],
        'node/no-unsupported-features/es-syntax': [
          'error',
          {
            ignores: ['dynamicImport'],
          },
        ],
      },
    },

    // esm-specific rules
    {
      files: ['*.mjs'],
      extends: ['plugin:node/recommended-module'],
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        'node/no-deprecated-api': [
          'warn',
          {
            ignoreModuleItems: ['domain', 'process.binding'],
          },
        ],
        'node/no-unsupported-features/es-syntax': [
          'error',
          {
            ignores: ['modules', 'dynamicImport'],
          },
        ],
      },
    },

    // typescript-specific rules
    {
      files: ['*.ts', '*.cts', '*.mts'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: require('./rules/typescript'),
    },

    // test-specific rules (must come after language-specific rules)
    {
      files: ['test/**', '*.spec.*', '*.test.*'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-exports': 'off',
        'mocha/no-setup-in-describe': 'off',

        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
