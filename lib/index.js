// @ts-check
'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:n/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: require('./rules/base'),
  overrides: [
    // js-specific rules
    {
      files: ['*.js', '*.cjs'],
      rules: {
        'n/no-unsupported-features/es-syntax': [
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
      rules: {
        'n/no-unsupported-features/es-syntax': [
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
      files: ['test/**', 'test-*/**', '*.spec.*', '*.test.*'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-exports': 'off',
        'mocha/no-setup-in-describe': 'off',

        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
      },
    },
  ],
};
